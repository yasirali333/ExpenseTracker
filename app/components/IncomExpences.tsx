"use client"
import {  Typography ,Paper} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "@/app/redux/hooks";



const theme = createTheme({
  typography: {
    myVariant4: {
      color: "black",
      fontSize: "1.2rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: '2rem',
      marginLeft:'0.4rem',
      textTransform: "capitalize",
    },
    myVariant5: {
      color: "black",
      fontSize: "1.5rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: '2rem',
      textTransform: "capitalize",
    },

   
  },
});


export default function IncomExpences() {
  const transactions = useAppSelector((state) => state.expenses.Transaction);
  const amounts = transactions.map((item) => item.amount);
  const income = amounts.filter((amount) => amount > 0).reduce((acc, item) => acc + item, 0);
  const expenses = amounts.filter((amount) => amount < 0).reduce((acc, item) => acc + item, 0);

  const convertAmount= (value: string | number): string => {
    if (typeof value === 'number') {
      if (Math.abs(value) >= 1000000 && Math.abs(value) < 1000000000) {
        return (value / 1000000).toFixed(2) + 'M';
      }
      if (Math.abs(value) >= 1000000000 && Math.abs(value) < 1000000000000) {
        return (value / 1000000000).toFixed(2) + 'B';
      }
      if (Math.abs(value) >= 1000000000000) {
        return (value / 1000000000000).toFixed(2) + 'T';
      }
    }
    return value.toString();
  };

  return (
    <ThemeProvider theme={theme}>

      <Paper elevation={3} square sx={{ bgcolor:'#fff' ,p: '20px',width:'87%',
      display: 'flex',justifyContent: 'space-between',margin: '20px 0px',flex:'1', textAlign:'center',}} >

        <Paper elevation={0}  sx={{ width:'50%', borderRight:'1px solid #dedede' ,}}>
          <Typography variant="myVariant4">INCOME</Typography><br/>
       
          <Typography variant="myVariant5" sx={{ color: '#2ecc71' }}>
          {Math.abs(income) >= 1000000 ? (convertAmount(income)) : `+$${income.toFixed(2)}`}
        </Typography>
        </Paper>
        <Paper elevation={0}  sx={{width:'50%'}}>
          <Typography variant="myVariant4">EXPENSE</Typography><br/>
          <Typography  variant="myVariant5" sx={{color:'#c0392b'}}>
          {Math.abs(income) >= 1000000 ? (convertAmount(income)) : `-$${income.toFixed(2)}`}
            </Typography>
        </Paper>
      </Paper>

    </ThemeProvider>
  );
}

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

  return (
    <ThemeProvider theme={theme}>

      <Paper elevation={3} square sx={{ bgcolor:'#fff' ,p: '20px',width:'19rem',
      display: 'flex',justifyContent: 'space-between',margin: '20px 0px',flex:'1', textAlign:'center',}} >

        <Paper elevation={0}  sx={{ width:'11rem', borderRight:'1px solid #dedede' ,}}>
          <Typography variant="myVariant4">INCOME</Typography><br/>
       
          <Typography  variant="myVariant5" sx={{color:'#2ecc71'}} >+${income.toFixed(2)}</Typography>
        </Paper>
        <Paper elevation={0}  sx={{width:'11rem'}}>
          <Typography variant="myVariant4">EXPENSE</Typography><br/>
          <Typography  variant="myVariant5" sx={{color:'#c0392b'}}>-${Math.abs(expenses).toFixed(2)}</Typography>
        </Paper>
      </Paper>

    </ThemeProvider>
  );
}

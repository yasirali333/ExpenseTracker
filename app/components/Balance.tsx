"use client"
import { Box, Typography } from "@mui/material";
import {  createTheme , ThemeProvider } from "@mui/material/styles";
import {  useAppSelector } from "@/app/redux/hooks";


const theme = createTheme({
  typography: {
    myVariant1: {
      color: "black",
      fontSize: "2rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: '2rem',
      marginLeft:'rem',
      paddingBottom:'1rem',
      textTransform: "capitalize",
    },
    myVariant2: {
      color: "black",
      fontSize: "1.5rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: '2rem',
      
      textTransform: "capitalize",
    },

    myVariant3: {
      color: "black",
      fontSize: "3rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: '2rem',
      textTransform: "capitalize",
    },
   
  },
});
const convertAmount = (value: string | number): string => {
  if (typeof value === 'number') {
    if (Math.abs(value) >= 1000000 && Math.abs(value) < 1000000000) {
      return (value / 1000000).toFixed(2) + 'M';
    }
    if (Math.abs(value) >= 1000000000 && Math.abs(value) < 1000000000000) {
      return (value / 1000000000).toFixed(2) + 'B';
    }
    if (Math.abs(value) >= 1000000000000 &&  Math.abs(value) < 1000000000000000000) {
      return (value / 1000000000000).toFixed(2) + 'T';
    }
    if (Math.abs(value) >= 1000000000000000000) {
      return (value / 1000000000000000000).toFixed(2) + 'QT';
    }
  }
  return value.toString();
};



export default function Balance() {
  const transactions = useAppSelector((state) => state.expenses.Transaction);
  const amount = transactions.map((item) => item.amount);
  const totalAmount = amount.reduce((acc, item) => (acc += item), 0);
  
  return (
    <ThemeProvider theme={theme}>
    <Box >
     <Box sx={{mb:'35px'}}><Typography variant="myVariant1">Expense Tracker</Typography></Box> 
     <Typography variant="myVariant2">
        YOUR BALANCE
     </Typography>
     <Box  sx={{mt:'10px'}}>
     <Typography variant="myVariant3">
        {Math.abs(totalAmount) >= 1000000 ? (convertAmount(totalAmount)) : `$${totalAmount.toFixed(2)}`}
     </Typography>
     </Box>

    </Box>
    </ThemeProvider>
  )
}

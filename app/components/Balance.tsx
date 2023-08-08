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
        ${totalAmount}
     </Typography>
     </Box>

    </Box>
    </ThemeProvider>
  )
}

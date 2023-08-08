'use client'
import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { deleteExpense} from "@/app/redux/feature/expenseSlice";
import {  createTheme , ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    myVariant6: {
      color: "black",
      fontSize: "1.2rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: '2rem',
      textTransform: "capitalize",
    },
  
  },
});

export default function TransactionList() {
  const expense = useAppSelector((state) => state.expenses.Transaction);
  const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={theme}>
    <Box>
          <Typography variant="myVariant6">History</Typography>
   
       <ul className="list">
        {expense.map((item: any) => (
          <li key={item.id} className={item.amount < 0 ? "minus" : "plus"}>
            {item.text}
            <span>${Math.abs(item.amount)}</span>
            <button
              onClick={() => dispatch(deleteExpense(item.id))}
              className="delete-btn"
            >
              x
            </button>
           
          </li>
        ))}
      </ul>
      
    </Box>
    </ThemeProvider>
  )
}

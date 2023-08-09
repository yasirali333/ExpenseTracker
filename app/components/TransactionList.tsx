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


export default function TransactionList() {
  const expense = useAppSelector((state) => state.expenses.Transaction);
  const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="myVariant6">History</Typography>
    <Box className='transaction-list'>
      
       <ul className="list">
        {expense.map((item: any) => (
          <li key={item.id} className={item.amount < 0 ? "minus" : "plus"}>
            {item.text}
            <span>
             
            {Math.abs(item.amount) >= 1000000 ? (convertAmount(item.amount)) : `+$${item.amount.toFixed(2)}`}
            </span>
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

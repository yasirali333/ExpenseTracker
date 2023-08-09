"use client"
import { Box , Button, TextField, Typography } from '@mui/material'
import React , {useState} from 'react'
import { useAppDispatch } from "@/app/redux/hooks";
import { addExpense} from "@/app/redux/feature/expenseSlice";
import {  createTheme , ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  palette:{
       secondary:{
        main:'#9c88ff'
      }
      
  },
  typography: {
    
    myVariant7: {
      
      color: "black",
      fontSize: "1.2rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: '2rem',
      marginLeft:'rem',
      paddingBottom:'1rem',
    
    },
    myVariant8: {
      color: "black",
      fontSize: "1.1rem",
      fontFamily: "Sans-Serif",
      fontStyle: "normal",
      fontWeight: "500",
 
    },

  
   
  },
});
export default function AddTransaction() {

  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
 
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    dispatch(addExpense(newTransaction))
  } 
 
  return (
    <ThemeProvider theme={theme}>
    <Box>
      <Box sx={{ borderBottom: '1px solid #bbb',pb: '10px',margin: '40px 0 10px',}}> 
       <Typography variant='myVariant7'>Add new transaction</Typography>
       </Box>
       
      <form  typeof='submit' >
        <Box >
          <Typography variant='myVariant7'>Text</Typography>
          <TextField placeholder='Enter Text..' typeof='text' color='secondary'
              sx={{ bgcolor: '#fff', width: '100%' }} value={text} required
              onChange={(e) => setText(e.target.value)}   onFocus={() => setText("")} />
        </Box>
        <Box sx={{mt:'0.5rem'}} >
          <Typography variant='myVariant8' >Amount <br />
            (negative - expense, positive - income)</Typography>
            <TextField placeholder='Enter Text..' typeof='text' color='secondary'
              sx={{ bgcolor: '#fff', width: '100%' }} value={amount} required
              onChange={(e) => setAmount(e.target.value)}  onFocus={() => setAmount("")}  />
        </Box>
       <button color='secondary' className='btn' 
       onClick={onSubmit}>
        Add transaction
       </button>
       
      </form>
    </Box>
    </ThemeProvider>
  )
}
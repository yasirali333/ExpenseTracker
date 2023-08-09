"use client"
import { Box , TextField, Typography } from '@mui/material'
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
  // const [isFormIncomplete, setIsFormIncomplete] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const ALPHA_DASH_REGEX = /^[a-zA]+$/;
  const NUMERIC_DASH_REGEX = /^[Z0-9-]+$/;

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // if (text.trim() === '' || amount === '') {
    //   setIsFormIncomplete(true);
    //   return;
    // }
 
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    dispatch(addExpense(newTransaction))
    setText("");
    setAmount("");
    // setIsFormIncomplete(false);

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
          <TextField placeholder='Enter Text..' typeof='text' color='secondary' required
           onKeyDown={(event) => {
            if (event.key === 'Backspace') {
              return;
            }
            if (!ALPHA_DASH_REGEX.test(event.key)) {
              event.preventDefault();
            }
          }}
              sx={{ bgcolor: '#fff', width: '100%' }} value={text} 
              onChange={(e) => setText(e.target.value)}   onFocus={() => setText("")} />
        </Box>
        <Box sx={{mt:'0.5rem'}} >
          <Typography variant='myVariant8' >Amount <br />
            (negative - expense, positive - income)</Typography>
            <TextField placeholder='Enter Text..' typeof='text' color='secondary'required
             onKeyDown={(event) => {
              if (event.key === 'Backspace') {
                return;
              }
              if (!NUMERIC_DASH_REGEX.test(event.key)) {
                event.preventDefault();
              }
            }}
              sx={{ bgcolor: '#fff', width: '100%' }} value={amount} 
              onChange={(e) => setAmount(e.target.value)}  onFocus={() => setAmount("") }  />
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
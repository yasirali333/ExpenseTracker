import Balance from "./components/Balance"
import IncomExpences from "./components/IncomExpences"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"

export default function Home() {

 
  return (

  
    <div className="container">
      <Balance/>
      <IncomExpences/>
      <TransactionList/>
      <AddTransaction/>
    </div>
   
 
  )
}



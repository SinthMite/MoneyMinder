import React from 'react'
import './App.css'
import  {MoneyInDebit}  from './Components/Finance/MoneyInDebit/MoneyInDebit.tsx'

function App() {
  return (
    <React.Fragment>
      <h1>MoneyMinder</h1>
      <MoneyInDebit />
    </React.Fragment>
  )
}

export default App
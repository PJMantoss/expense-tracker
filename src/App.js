import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList/>
        <AddTransaction/>
      </div>
      <div id="love">
          <span>Made With</span>
          <img src="https://img.icons8.com/dusk/64/000000/like.png" alt="love"/> 
          <span>by <a href="https://github.com/PJMantoss" target="_blank" rel="noopener noreferrer">Mantoss</a></span>
      </div>
    </GlobalProvider>
  );
}

export default App;

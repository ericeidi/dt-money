import { GlobalStyle } from './styles/global'
import Modal  from 'react-modal'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import React, { useState } from 'react';
import { NewTransactionsModal } from './components/NewTransactionsModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal} />
      <Dashboard/>

      <NewTransactionsModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}

      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}


import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenModalTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseModalTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenModalTransactionModal} />
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseModalTransactionModal} />

      <GlobalStyle />
    </>
  );
}



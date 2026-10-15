import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Historia from './pages/Historia';
import Footer from './components/Footer';
import Contato from './pages/Contato';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Função para renderizar a página ativa dinamicamente
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'produtos':
        return <Produtos />;
      case 'historia':
        return <Historia />;
      case 'contato':
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070d1b] text-white">
      {/* Passamos uma função para o Header controlar qual página está ativa */}
      <Header setCurrentPage={setCurrentPage} />

      {/* Conteúdo da página atual */}
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
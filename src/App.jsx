import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import AtendimentoAI from './pages/AtendimentoAI';
import Imoveis from './pages/Imoveis';
import Corretores from './pages/Corretores';
import Agendamentos from './pages/Agendamentos';
import Integracoes from './pages/Integracoes';
import Recuperacao from './pages/Recuperacao';
import Relatorios from './pages/Relatorios';
import Configuracoes from './pages/Configuracoes';
import Ajuda from './pages/Ajuda';
import Login from './pages/Login';
import { getStoredTenant, setStoredTenant, clearStoredTenant } from './services/auth';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = getStoredTenant();
    if (saved) setUser(saved);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setStoredTenant(userData);
  };

  const handleLogout = () => {
    setUser(null);
    clearStoredTenant();
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'leads':
        return <Leads />;
      case 'atendimento-ia':
      case 'conversas':
        return <AtendimentoAI />;
      case 'imoveis':
        return <Imoveis />;
      case 'corretores':
        return <Corretores />;
      case 'agendamentos':
        return <Agendamentos />;
      case 'recuperacao':
        return <Recuperacao />;
      case 'relatorios':
        return <Relatorios />;
      case 'integracoes':
        return <Integracoes />;
      case 'configuracoes':
        return <Configuracoes />;
      case 'ajuda':
        return <Ajuda />;
      default:
        return <Dashboard setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex">
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="flex-1 md:ml-64 flex flex-col min-w-0">
        <Header 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          title={currentPage.replace('-', ' ')}
          user={user}
        />
        
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

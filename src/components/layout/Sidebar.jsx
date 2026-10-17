import React from 'react';
import { 
  LayoutDashboard, Users, Bot, MessageSquare, Building2, 
  UserCheck, Calendar, RotateCcw, BarChart3, Share2, 
  Settings, HelpCircle, Sparkles 
} from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'leads', label: 'Leads', icon: Users },
  { id: 'atendimento-ia', label: 'Atendimento IA', icon: Bot },
  { id: 'conversas', label: 'Conversas', icon: MessageSquare },
  { id: 'imoveis', label: 'Imóveis', icon: Building2 },
  { id: 'corretores', label: 'Corretores', icon: UserCheck },
  { id: 'agendamentos', label: 'Agendamentos', icon: Calendar },
  { id: 'recuperacao', label: 'Recuperação', icon: RotateCcw },
  { id: 'relatorios', label: 'Relatórios', icon: BarChart3 },
  { id: 'integracoes', label: 'Integrações', icon: Share2 },
  { id: 'configuracoes', label: 'Configurações', icon: Settings },
  { id: 'ajuda', label: 'Ajuda e Suporte', icon: HelpCircle },
];

export default function Sidebar({ currentPage, setCurrentPage, isOpen, setIsOpen }) {
  return (
    <aside className={`
      fixed top-0 left-0 z-40 h-screen w-64 bg-[#0d1322] border-r border-slate-800 transition-transform duration-300 flex flex-col
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      {/* Logotipo Tipográfico ImoAI */}
      <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white">Imo<span className="text-blue-400">AI</span></span>
            <span className="block text-[10px] font-semibold tracking-wider uppercase text-emerald-400">SaaS Imobiliário</span>
          </div>
        </div>
      </div>

      {/* Navegação Principal */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-sm shadow-blue-500/10' 
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'}
              `}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Banner de Modo Demonstrativo */}
      <div className="p-3 border-t border-slate-800/80">
        <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/30 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 font-medium text-emerald-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Dados Demonstrativos
          </div>
          <p className="text-[11px] text-slate-400">Ambiente de demonstração FASE 1 ativo.</p>
        </div>
      </div>
    </aside>
  );
}

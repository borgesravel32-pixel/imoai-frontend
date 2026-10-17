import React from 'react';
import { dashboardMetrics, leadsData } from '../data/mockData';
import { Users, Bot, UserCheck, Calendar, Clock, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function Dashboard({ setCurrentPage }) {
  const cards = [
    { title: "Novos Leads", val: dashboardMetrics.novosLeads, icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
    { title: "Atendimentos IA", val: dashboardMetrics.atendimentosEmAndamento, icon: Bot, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { title: "Leads Qualificados", val: dashboardMetrics.leadsQualificados, icon: UserCheck, color: "text-indigo-400", bg: "bg-indigo-500/10" },
    { title: "Visitas Agendadas", val: dashboardMetrics.visitasAgendadas, icon: Calendar, color: "text-purple-400", bg: "bg-purple-500/10" },
    { title: "Aguardando Retorno", val: dashboardMetrics.aguardandoRetorno, icon: Clock, color: "text-amber-400", bg: "bg-amber-500/10" },
    { title: "Taxa de Conversão", val: dashboardMetrics.taxaConversao, icon: TrendingUp, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  ];

  return (
    <div className="space-y-6">
      {/* Cards de Métricas */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={i} className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{c.title}</span>
                <div className={`p-2 rounded-lg ${c.bg}`}>
                  <Icon className={`w-4 h-4 ${c.color}`} />
                </div>
              </div>
              <div className="text-xl font-bold text-white">{c.val}</div>
            </div>
          );
        })}
      </div>

      {/* Seção Principal: Funil & Lista de Oportunidades */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tabela de Leads Recentes */}
        <div className="lg:col-span-2 bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">Leads Prioritários Recentes</h3>
            <button 
              onClick={() => setCurrentPage('leads')}
              className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium"
            >
              Ver todos <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/60 text-slate-400 border-b border-slate-800 uppercase text-[10px]">
                <tr>
                  <th className="p-2.5">Nome</th>
                  <th className="p-2.5">Interesse</th>
                  <th className="p-2.5">Etapa</th>
                  <th className="p-2.5">Corretor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {leadsData.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-2.5 font-medium text-white">{lead.nome}</td>
                    <td className="p-2.5">{lead.tipoImovel} ({lead.regiao})</td>
                    <td className="p-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {lead.etapa}
                      </span>
                    </td>
                    <td className="p-2.5 text-slate-400">{lead.corretor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Resumo do Funil Comercial */}
        <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 space-y-4">
          <h3 className="text-base font-semibold text-white">Funil Comercial (Demo)</h3>
          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>1. Contatos Recebidos</span>
                <span className="font-bold">100% (42)</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>2. Atendidos pela IA</span>
                <span className="font-bold">85% (35)</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[85%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>3. Qualificados</span>
                <span className="font-bold">69% (29)</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[69%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>4. Visitas Agendadas</span>
                <span className="font-bold">28% (12)</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full w-[28%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

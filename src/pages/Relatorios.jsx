import React from 'react';
import { BarChart3, TrendingUp, Users, Calendar } from 'lucide-react';

export default function Relatorios() {
  return (
    <div className="space-y-4">
      <div className="bg-[#0f172a] p-4 rounded-xl border border-slate-800/80 space-y-2">
        <h3 className="text-sm font-bold text-white">Relatórios de Desempenho (Dados Demonstrativos)</h3>
        <p className="text-xs text-slate-400">Acompanhe métricas de conversão e velocidade de resposta da equipa e da IA.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#0f172a] p-4 rounded-xl border border-slate-800/80 space-y-3">
          <span className="text-xs font-bold text-slate-300 block">Tempo Médio de Primeira Resposta</span>
          <div className="text-2xl font-bold text-emerald-400">1.8 minutos</div>
          <p className="text-[11px] text-slate-400">Processado automaticamente pela IA no WhatsApp.</p>
        </div>

        <div className="bg-[#0f172a] p-4 rounded-xl border border-slate-800/80 space-y-3">
          <span className="text-xs font-bold text-slate-300 block">Taxa de Qualificação da IA</span>
          <div className="text-2xl font-bold text-blue-400">69.0%</div>
          <p className="text-[11px] text-slate-400">Leads que forneceram orçamento, região e tipo de imóvel.</p>
        </div>
      </div>
    </div>
  );
}

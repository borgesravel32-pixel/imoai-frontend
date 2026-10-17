import React from 'react';
import { corretoresData } from '../data/mockData';
import { UserCheck, Phone, MapPin, Plus, Shield } from 'lucide-react';

export default function Corretores() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-[#0f172a] p-3.5 rounded-xl border border-slate-800/80">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Corretores e Distribuição</h3>
        <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Novo Corretor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {corretoresData.map((corretor) => (
          <div key={corretor.id} className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm font-bold text-white">{corretor.nome}</h4>
                <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <Phone className="w-3 h-3 text-slate-500" /> {corretor.contato}
                </span>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {corretor.status}
              </span>
            </div>

            <div className="space-y-1.5 text-xs">
              <div>
                <span className="text-slate-500 text-[10px] block">Regiões Atendidas:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {corretor.regioes.map((r, i) => (
                    <span key={i} className="bg-slate-900 border border-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-500 text-[10px] block">Carga de Atendimento Atual:</span>
                <div className="text-slate-200 font-semibold mt-0.5">{corretor.cargaAtual} leads ativos</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

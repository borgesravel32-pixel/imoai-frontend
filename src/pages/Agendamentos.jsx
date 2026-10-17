import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, User } from 'lucide-react';

export default function Agendamentos() {
  const agendamentosDemo = [
    {
      id: "AG-01",
      interessado: "Mariana Silva",
      imovel: "AP-402 - Apt. Jardins",
      corretor: "Carlos Eduardo",
      dataHorario: "2026-10-18 às 15:00",
      status: "Confirmado",
      obs: "Cliente solicitou confirmação por WhatsApp 1h antes."
    },
    {
      id: "AG-02",
      interessado: "Roberto Mendes",
      imovel: "CS-108 - Casa Barra",
      corretor: "Aguardando definição",
      dataHorario: "2026-10-19 às 10:30",
      status: "Pendente de Confirmação",
      obs: "Proposta de horário enviada pela IA."
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-[#0f172a] p-3.5 rounded-xl border border-slate-800/80">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Agendamentos de Visitas</h3>
        <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
          Solicitar Nova Visita
        </button>
      </div>

      <div className="space-y-3">
        {agendamentosDemo.map((item) => (
          <div key={item.id} className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 flex flex-col md:flex-row justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                  item.status === 'Confirmado' 
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                }`}>
                  {item.status}
                </span>
                <span className="text-xs font-bold text-white">{item.imovel}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>Cliente: <strong className="text-white">{item.interessado}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.dataHorario}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>Corretor: {item.corretor}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 bg-slate-900/50 p-2 rounded border border-slate-800/50">
                {item.obs}
              </p>
            </div>

            <div className="flex md:flex-col justify-end gap-2 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-4">
              <button className="px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 rounded text-xs font-medium">
                Confirmar
              </button>
              <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs font-medium">
                Reagendar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

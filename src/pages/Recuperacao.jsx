import React from 'react';
import { RotateCcw, Clock, AlertTriangle, Send } from 'lucide-react';

export default function Recuperacao() {
  const semRetorno = [
    { id: "LEAD-104", nome: "Lucas Castro", tempoSemResposta: "3 dias", etapa: "Aguardando Visita", corretor: "Carlos Eduardo" },
    { id: "LEAD-105", nome: "Camila Rocha", tempoSemResposta: "5 dias", etapa: "Aprovação de Cadastro", corretor: "Ana Beatriz" }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-[#0f172a] p-3.5 rounded-xl border border-slate-800/80">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Recuperação de Contatos Inativos</h3>
          <p className="text-[11px] text-slate-400">Identificação de oportunidades sem interação recente.</p>
        </div>
      </div>

      <div className="space-y-3">
        {semRetorno.map((item) => (
          <div key={item.id} className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">{item.nome}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {item.tempoSemResposta} sem resposta
                </span>
              </div>
              <span className="text-xs text-slate-400 block mt-1">Etapa: {item.etapa} • Responsável: {item.corretor}</span>
            </div>

            <button className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 transition-colors">
              <Send className="w-3.5 h-3.5" /> Enviar Mensagem de Acompanhamento
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

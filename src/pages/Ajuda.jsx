import React from 'react';
import { HelpCircle, MessageSquare, FileText } from 'lucide-react';

export default function Ajuda() {
  return (
    <div className="space-y-4">
      <div className="bg-[#0f172a] p-5 rounded-xl border border-slate-800/80 space-y-3">
        <h3 className="text-sm font-bold text-white">Central de Ajuda e Suporte ImoAI</h3>
        <p className="text-xs text-slate-400">Aceda à documentação ou entre em contacto com a nossa equipa de suporte técnico.</p>
        
        <div className="pt-2 flex gap-2">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-semibold">
            Falar com Suporte
          </button>
        </div>
      </div>
    </div>
  );
}

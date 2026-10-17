import React from 'react';
import { Share2, CheckCircle2, ShieldAlert, Key, Server } from 'lucide-react';

export default function Integracoes() {
  return (
    <div className="space-y-6">
      <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">WhatsApp Business Platform</h3>
              <p className="text-xs text-slate-400">API Oficial de Comunicação Automática</p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Modo Demonstração
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800/60 space-y-2">
            <span className="text-slate-400 font-semibold block">Status da Conexão</span>
            <div className="flex items-center gap-2 text-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span>Simulação ativa para validação de fluxos da Fase 1</span>
            </div>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800/60 space-y-2">
            <span className="text-slate-400 font-semibold block">Segurança de Credenciais</span>
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldAlert className="w-4 h-4" />
              <span>Chaves e tokens são armazenados exclusivamente no servidor backend (Fase 2)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Settings, Shield, Bot, Building } from 'lucide-react';

export default function Configuracoes() {
  return (
    <div className="space-y-4">
      <div className="bg-[#0f172a] p-5 rounded-xl border border-slate-800/80 space-y-4">
        <h3 className="text-sm font-bold text-white border-b border-slate-800 pb-2">Configurações do Sistema</h3>

        <div className="space-y-3 text-xs">
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/60 flex justify-between items-center">
            <div>
              <span className="font-semibold text-white block">Perfil da Imobiliária</span>
              <span className="text-slate-400">Nome fantasia, CNPJ, endereço e contacto.</span>
            </div>
            <button className="px-3 py-1 bg-slate-800 text-slate-200 rounded font-medium">Editar</button>
          </div>

          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/60 flex justify-between items-center">
            <div>
              <span className="font-semibold text-white block">Instruções e Regras da IA</span>
              <span className="text-slate-400">Definição de diretrizes, tom de voz e limites da IA.</span>
            </div>
            <button className="px-3 py-1 bg-slate-800 text-slate-200 rounded font-medium">Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

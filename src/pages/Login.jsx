import React, { useState } from 'react';
import { Sparkles, Lock, Mail, ArrowRight, Building } from 'lucide-react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de login FASE 2
    onLogin({ name: 'Imobiliária Alfa', email });
  };

  return (
    <div className="min-h-screen bg-[#070a12] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0f172a] border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
        {/* Logo */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Imo<span className="text-blue-400">AI</span></h1>
          <p className="text-xs text-slate-400">Acesse o painel da sua imobiliária</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="space-y-1">
            <label className="text-slate-300 font-medium">E-mail corporativo</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
              <input 
                type="email" 
                required
                placeholder="contato@suaimobiliaria.com.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-slate-300 font-medium">Senha</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
              <input 
                type="password" 
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-xs"
          >
            Entrar no Painel <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-800/30 text-[11px] text-slate-400 text-center">
          <span className="text-emerald-400 font-semibold block mb-0.5">Ambiente Seguro FASE 2</span>
          Isolamento Multi-Tenant habilitado para cada imobiliária.
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Menu, Bell, User, Search } from 'lucide-react';

export default function Header({ toggleSidebar, title }) {
  return (
    <header className="sticky top-0 z-30 bg-[#070a12]/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-slate-800/60 text-slate-300 hover:bg-slate-800 md:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg md:text-xl font-bold text-white capitalize">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-400">
          <Search className="w-3.5 h-3.5 text-slate-500" />
          <span>Buscar imóveis, leads...</span>
        </div>

        <button className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-400 rounded-full" />
        </button>

        <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 border border-slate-700 flex items-center justify-center text-white text-xs font-semibold">
            <User className="w-4 h-4" />
          </div>
          <span className="hidden md:inline text-xs font-medium text-slate-300">Imobiliária Alfa</span>
        </div>
      </div>
    </header>
  );
}

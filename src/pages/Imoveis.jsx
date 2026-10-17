import React, { useState } from 'react';
import { imoveisData } from '../data/mockData';
import { Search, Plus, Building2, MapPin, Bed, Bath, Car, DollarSign } from 'lucide-react';

export default function Imoveis() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredImoveis = imoveisData.filter(i => 
    i.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.regiao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center bg-[#0f172a] p-3.5 rounded-xl border border-slate-800/80">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
          <input 
            type="text"
            placeholder="Buscar por código, título ou região..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Cadastrar Imóvel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImoveis.map((imovel) => (
          <div key={imovel.codigo} className="bg-[#0f172a] border border-slate-800/80 rounded-xl overflow-hidden flex flex-col justify-between">
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {imovel.codigo} • {imovel.modalidade}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {imovel.disponibilidade}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white line-clamp-1">{imovel.titulo}</h4>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" /> {imovel.regiao}, {imovel.cidade}
                </p>
              </div>

              <div className="text-lg font-bold text-emerald-400">
                R$ {imovel.preco.toLocaleString('pt-BR')}
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 text-slate-300 text-xs text-center">
                <div className="bg-slate-900/50 py-1.5 rounded flex items-center justify-center gap-1">
                  <Bed className="w-3.5 h-3.5 text-slate-400" /> {imovel.quartos} qts
                </div>
                <div className="bg-slate-900/50 py-1.5 rounded flex items-center justify-center gap-1">
                  <Bath className="w-3.5 h-3.5 text-slate-400" /> {imovel.banheiros} ban
                </div>
                <div className="bg-slate-900/50 py-1.5 rounded flex items-center justify-center gap-1">
                  <Car className="w-3.5 h-3.5 text-slate-400" /> {imovel.vagas} vag
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-900/40 border-t border-slate-800/80 flex justify-between items-center text-[11px]">
              <span className="text-slate-400">Corretor: <strong className="text-slate-200">{imovel.corretor}</strong></span>
              <button className="text-blue-400 hover:text-blue-300 font-medium">Editar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { leadsData } from '../data/mockData';
import { Search, Filter, Plus, User, Phone, MapPin, DollarSign, Calendar, ArrowRight, X } from 'lucide-react';

export default function Leads() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEtapa, setSelectedEtapa] = useState('Todas');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showCadastroModal, setShowCadastroModal] = useState(false);

  // Filtro dinâmico
  const filteredLeads = leadsData.filter(lead => {
    const matchesSearch = lead.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.telefone.includes(searchTerm) ||
                          lead.regiao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEtapa = selectedEtapa === 'Todas' || lead.etapa === selectedEtapa;
    return matchesSearch && matchesEtapa;
  });

  return (
    <div className="space-y-4">
      {/* Barra de Ações: Busca, Filtros e Novo Lead */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center bg-[#0f172a] p-3.5 rounded-xl border border-slate-800/80">
        <div className="flex flex-1 gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
            <input 
              type="text"
              placeholder="Buscar por nome, telefone ou região..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          <select 
            value={selectedEtapa}
            onChange={(e) => setSelectedEtapa(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="Todas">Todas as etapas</option>
            <option value="Em Atendimento IA">Em Atendimento IA</option>
            <option value="Qualificado">Qualificado</option>
            <option value="Encaminhado">Encaminhado</option>
          </select>
        </div>

        <button 
          onClick={() => setShowCadastroModal(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" /> Novo Lead
        </button>
      </div>

      {/* Tabela Responsiva de Leads */}
      <div className="bg-[#0f172a] border border-slate-800/80 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-3">Interessado</th>
                <th className="p-3">Origem</th>
                <th className="p-3">Tipo / Região</th>
                <th className="p-3">Faixa de Preço</th>
                <th className="p-3">Etapa</th>
                <th className="p-3">Corretor</th>
                <th className="p-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3">
                    <div className="font-semibold text-white">{lead.nome}</div>
                    <div className="text-[11px] text-slate-400">{lead.telefone}</div>
                  </td>
                  <td className="p-3 text-slate-400">{lead.origem}</td>
                  <td className="p-3">
                    <span className="text-slate-200">{lead.tipoImovel}</span>
                    <div className="text-[11px] text-slate-400">{lead.regiao}</div>
                  </td>
                  <td className="p-3 font-medium text-emerald-400">{lead.faixaPreco}</td>
                  <td className="p-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                      lead.etapa === 'Qualificado' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      lead.etapa === 'Em Atendimento IA' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                      'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                    }`}>
                      {lead.etapa}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400">{lead.corretor}</td>
                  <td className="p-3 text-right">
                    <button 
                      onClick={() => setSelectedLead(lead)}
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] rounded font-medium transition-colors"
                    >
                      Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Detalhes do Lead */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-slate-800 w-full max-w-lg rounded-xl p-5 space-y-4 text-xs">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-white">{selectedLead.nome}</h3>
                <span className="text-slate-400 text-[11px]">{selectedLead.id} • {selectedLead.telefone}</span>
              </div>
              <button onClick={() => setSelectedLead(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-slate-300">
              <div className="bg-slate-900/60 p-2.5 rounded-lg">
                <span className="text-slate-500 block text-[10px]">Origem:</span>
                <span className="font-semibold">{selectedLead.origem}</span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg">
                <span className="text-slate-500 block text-[10px]">Finalidade:</span>
                <span className="font-semibold">{selectedLead.finalidade}</span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg">
                <span className="text-slate-500 block text-[10px]">Imóvel Desejado:</span>
                <span className="font-semibold">{selectedLead.tipoImovel}</span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg">
                <span className="text-slate-500 block text-[10px]">Orçamento Informado:</span>
                <span className="font-semibold text-emerald-400">{selectedLead.faixaPreco}</span>
              </div>
            </div>

            <div className="bg-blue-950/30 border border-blue-800/30 p-3 rounded-lg space-y-1">
              <span className="text-blue-400 font-semibold text-[11px] block">Próxima Ação Sugerida pela IA:</span>
              <p className="text-slate-300">{selectedLead.proximaAcao}</p>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button 
                onClick={() => setSelectedLead(null)}
                className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded hover:bg-slate-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

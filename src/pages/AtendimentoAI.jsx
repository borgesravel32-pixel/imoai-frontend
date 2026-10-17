import React, { useState } from 'react';
import { conversasIaData, corretoresData } from '../data/mockData';
import { qualificarLeadComIA } from '../services/aiService';
import { distribuirLeadAuto } from '../services/automationService';
import { Bot, Send, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AtendimentoAI() {
  const [conversas, setConversas] = useState(conversasIaData);
  const [selectedChat, setSelectedChat] = useState(conversas[0]);
  const [inputMsg, setInputMsg] = useState('');
  const [notificacao, setNotificacao] = useState(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const horaAtual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Nova mensagem do cliente
    const novaMensagemCliente = {
      sender: 'client',
      text: inputMsg,
      time: horaAtual
    };

    // Processamento da resposta pela IA
    const resultadoIA = qualificarLeadComIA(inputMsg, selectedChat.mensagens);

    const novaMensagemIA = {
      sender: 'ia',
      text: resultadoIA.respostaIA,
      time: horaAtual
    };

    // Executa regra de distribuição automática de corretor
    const novaoTipo = resultadoIA.qualificacao.tipoImovel !== "Não especificado" ? resultadoIA.qualificacao.tipoImovel : selectedChat.resumoQualificacao.tipo;
    const distribuicao = distribuirLeadAuto(
      { ...selectedChat.resumoQualificacao, tipo: novaoTipo },
      corretoresData
    );

    const mensagensAtualizadas = [...selectedChat.mensagens, novaMensagemCliente, novaMensagemIA];

    const chatAtualizado = {
      ...selectedChat,
      mensagens: mensagensAtualizadas,
      resumoQualificacao: {
        ...selectedChat.resumoQualificacao,
        tipo: novaoTipo,
        finalidade: resultadoIA.qualificacao.finalidade,
        encaminhadoPara: distribuicao.corretorAtribuido
      }
    };

    setSelectedChat(chatAtualizado);
    setConversas(conversas.map(c => c.id === chatAtualizado.id ? chatAtualizado : c));
    setInputMsg('');

    // Exibe notificação visual da automação
    setNotificacao(distribuicao.motivo);
    setTimeout(() => setNotificacao(null), 4000);
  };

  return (
    <div className="h-[calc(100vh-100px)] grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Coluna 1: Lista de Conversas (3 cols) */}
      <div className="lg:col-span-3 bg-[#0f172a] border border-slate-800/80 rounded-xl p-3 flex flex-col gap-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 p-1">Conversas com IA</h3>
        <div className="space-y-1 overflow-y-auto flex-1">
          {conversas.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                selectedChat.id === chat.id 
                  ? 'bg-blue-600/20 border-blue-500/40 text-white' 
                  : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-xs">{chat.leadNome}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {chat.status}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 truncate">{chat.telefone}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Coluna 2: Janela da Conversa Interativa (6 cols) */}
      <div className="lg:col-span-6 bg-[#0f172a] border border-slate-800/80 rounded-xl flex flex-col overflow-hidden relative">
        {/* Alerta de Automação */}
        {notificacao && (
          <div className="absolute top-14 left-4 right-4 z-20 bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 p-2.5 rounded-lg text-xs flex items-center gap-2 shadow-lg backdrop-blur-md animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{notificacao}</span>
          </div>
        )}

        {/* Cabeçalho do Chat */}
        <div className="p-3 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">{selectedChat.leadNome}</h4>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> Atendimento Ativo pela IA
              </span>
            </div>
          </div>
          <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Automação Ativa
          </span>
        </div>

        {/* Mensagens do Chat */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#070a12]/40">
          {selectedChat.mensagens.map((m, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${m.sender === 'client' ? 'items-end' : 'items-start'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-xl text-xs ${
                m.sender === 'client' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-slate-800 text-slate-200 border border-slate-700/60 rounded-bl-none'
              }`}>
                {m.text}
              </div>
              <span className="text-[9px] text-slate-500 mt-1 px-1">{m.time}</span>
            </div>
          ))}
        </div>

        {/* Envio de Mensagem Simulado */}
        <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 bg-slate-900/40 flex gap-2">
          <input 
            type="text"
            placeholder="Simular mensagem do cliente (ex: Procuro apartamento na Savassi)..."
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Coluna 3: Resumo e Qualificação do Cliente (3 cols) */}
      <div className="lg:col-span-3 bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 space-y-4 text-xs">
        <h3 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
          Qualificação em Tempo Real
        </h3>

        <div className="space-y-2.5 text-slate-300">
          <div>
            <span className="text-slate-500 text-[10px] block">Tipo de Imóvel:</span>
            <span className="font-semibold text-white">{selectedChat.resumoQualificacao.tipo}</span>
          </div>
          <div>
            <span className="text-slate-500 text-[10px] block">Finalidade:</span>
            <span className="font-semibold text-white">{selectedChat.resumoQualificacao.finalidade}</span>
          </div>
          <div>
            <span className="text-slate-500 text-[10px] block">Orçamento:</span>
            <span className="font-semibold text-emerald-400">{selectedChat.resumoQualificacao.orcamento}</span>
          </div>
          <div>
            <span className="text-slate-500 text-[10px] block">Localização:</span>
            <span className="font-semibold text-white">{selectedChat.resumoQualificacao.localizacao}</span>
          </div>
          <div>
            <span className="text-slate-500 text-[10px] block">Corretor Atribuído:</span>
            <span className="font-semibold text-blue-400">{selectedChat.resumoQualificacao.encaminhadoPara}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800">
          <button className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 py-2 rounded font-medium flex items-center justify-center gap-2">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" /> Reatribuir Corretor
          </button>
        </div>
      </div>
    </div>
  );
}

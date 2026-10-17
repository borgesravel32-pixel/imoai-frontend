// Serviço de Automação e Distribuição de Leads do ImoAI

export const distribuirLeadAuto = (leadData, corretores) => {
  // Filtra corretores ativos
  const ativos = corretores.filter(c => c.status === 'Ativo');

  if (ativos.length === 0) {
    return { corretorAtribuido: "Aguardando atribuição manual", motivo: "Nenhum corretor ativo no momento." };
  }

  // Tenta atribuir por região coincidente
  const porRegiao = ativos.find(c => 
    c.regioes.some(r => leadData.localizacao && leadData.localizacao.toLowerCase().includes(r.toLowerCase()))
  );

  if (porRegiao) {
    return { 
      corretorAtribuido: porRegiao.nome, 
      motivo: `Atribuído por especialidade na região: ${leadData.localizacao}` 
    };
  }

  // Fallback: atribui ao corretor com menor carga atual (Round-Robin)
  const menorCarga = [...ativos].sort((a, b) => a.cargaAtual - b.cargaAtual)[0];

  return {
    corretorAtribuido: menorCarga.nome,
    motivo: `Atribuído via rodízio (menor carga atual: ${menorCarga.cargaAtual} leads)`
  };
};

export const isDemoMode = true;

export const dashboardMetrics = {
  novosLeads: 42,
  atendimentosEmAndamento: 18,
  leadsQualificados: 29,
  visitasAgendadas: 12,
  aguardandoRetorno: 7,
  taxaConversao: "18.4%"
};

export const leadsData = [
  {
    id: "LEAD-101",
    nome: "Mariana Silva",
    telefone: "(11) 98765-4321",
    dataEntrada: "2026-10-17 14:20",
    origem: "WhatsApp",
    tipoImovel: "Apartamento",
    regiao: "Jardins, São Paulo",
    faixaPreco: "R$ 800.000 - R$ 1.200.000",
    finalidade: "Compra",
    etapa: "Qualificado",
    corretor: "Carlos Eduardo",
    proximaAcao: "Agendar visita ao imóvel AP-402"
  },
  {
    id: "LEAD-102",
    nome: "Roberto Mendes",
    telefone: "(21) 99887-1122",
    dataEntrada: "2026-10-17 11:05",
    origem: "Site / Formulário",
    tipoImovel: "Casa em Condomínio",
    regiao: "Barra da Tijuca, Rio de Janeiro",
    faixaPreco: "R$ 2.000.000 - R$ 3.000.000",
    finalidade: "Compra",
    etapa: "Em Atendimento IA",
    corretor: "Aguardando atribuição",
    proximaAcao: "Coletar preferência de quartos"
  },
  {
    id: "LEAD-103",
    nome: "Fernanda Lima",
    telefone: "(31) 97123-4455",
    dataEntrada: "2026-10-16 18:45",
    origem: "Portal Imobiliário",
    tipoImovel: "Apartamento 2 Qts",
    regiao: "Savassi, Belo Horizonte",
    faixaPreco: "R$ 3.500 / mês",
    finalidade: "Aluguel",
    etapa: "Encaminhado",
    corretor: "Ana Beatriz",
    proximaAcao: "Enviar opções de contratos"
  }
];

export const imoveisData = [
  {
    codigo: "AP-402",
    titulo: "Apartamento Amplo com Varanda Gourmet",
    tipo: "Apartamento",
    modalidade: "Venda",
    preco: 950000,
    cidade: "São Paulo",
    regiao: "Jardins",
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    disponibilidade: "Disponível",
    corretor: "Carlos Eduardo"
  },
  {
    codigo: "CS-108",
    titulo: "Casa Moderna em Condomínio Fechado",
    tipo: "Casa",
    modalidade: "Venda",
    preco: 2400000,
    cidade: "Rio de Janeiro",
    regiao: "Barra da Tijuca",
    quartos: 4,
    banheiros: 5,
    vagas: 4,
    disponibilidade: "Disponível",
    corretor: "Aguardando atribuição"
  }
];

export const corretoresData = [
  {
    id: "CORR-1",
    nome: "Carlos Eduardo",
    contato: "(11) 97777-1111",
    regioes: ["Jardins", "Pinheiros", "Itaim Bibi"],
    tipos: ["Apartamento", "Penthouse"],
    status: "Ativo",
    cargaAtual: 8
  },
  {
    id: "CORR-2",
    nome: "Ana Beatriz",
    contato: "(31) 98888-2222",
    regioes: ["Savassi", "Lourdes", "Belvedere"],
    tipos: ["Apartamento", "Studio", "Aluguel"],
    status: "Ativo",
    cargaAtual: 5
  }
];

export const conversasIaData = [
  {
    id: "CONV-501",
    leadNome: "Mariana Silva",
    telefone: "(11) 98765-4321",
    status: "Qualificado",
    mensagens: [
      { sender: "client", text: "Olá! Vi um anúncio de um apartamento nos Jardins.", time: "14:20" },
      { sender: "ia", text: "Olá, Mariana! Seja bem-vinda à nossa imobiliária. Sou o assistente virtual ImoAI. Qual valor aproximado procura investir?", time: "14:20" },
      { sender: "client", text: "Estou buscando algo entre 800 mil e 1.2 milhão de reais, para compra.", time: "14:21" },
      { sender: "ia", text: "Excelente! Temos opções incríveis na região com 3 quartos. Gostaria de agendar uma conversa com nosso corretor especialista Carlos Eduardo?", time: "14:22" }
    ],
    resumoQualificacao: {
      tipo: "Apartamento",
      finalidade: "Compra",
      orcamento: "R$ 800 mil - R$ 1.2M",
      localizacao: "Jardins, SP",
      encaminhadoPara: "Carlos Eduardo"
    }
  }
];

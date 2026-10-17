// Serviço de Integração com IA para Atendimento Imobiliário

export const qualificarLeadComIA = (mensagemCliente, historico = []) => {
  const texto = mensagemCliente.toLowerCase();
  
  // Análise simples de intenção
  let tipoImovel = "Não especificado";
  let orcamento = "Não informado";
  let finalidade = "Compra";

  if (texto.includes("casa")) tipoImovel = "Casa";
  if (texto.includes("apt") || texto.includes("apartamento")) tipoImovel = "Apartamento";
  if (texto.includes("alugar") || texto.includes("aluguel")) finalidade = "Aluguel";
  
  if (texto.includes("mil") || texto.includes("milhões") || texto.includes("r$")) {
    orcamento = "Detectado na conversa";
  }

  return {
    respostaIA: `Obrigado pelo contato! Entendi que procura um(a) ${tipoImovel} para ${finalidade}. Um dos nossos corretores especialistas vai acompanhar o seu atendimento em breve.`,
    qualificacao: {
      tipoImovel,
      finalidade,
      orcamento,
      status: "Qualificado pela IA"
    }
  };
};

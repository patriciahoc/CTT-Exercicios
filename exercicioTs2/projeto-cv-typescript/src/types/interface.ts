export interface RespostaAPI{
  nome:string,
  ocupacao: string,
  resumo:string,
  perfilProfissional:string,
  contatos: ContatosItens[],
  educacao: EducacaoItens[],
  experiencia: ExperienciaItens[]
}

export interface ContatosItens{
  id: number,
  tipo:string,
  contato:string
}

export interface EducacaoItens {
  id:number,
  instituicao:string,
  curso:string

}
export interface ExperienciaItens{
  id:number,
  cargo:string,
  periodo:string,
  empresa: string,
  local:string,
  conteudo:string
}


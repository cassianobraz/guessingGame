export type Challenge = {
  id: number
  word: string
  tip: string
}

export const WORDS: Challenge[] = [
  {
    id: 1,
    word: 'PYTHON',
    tip: 'Linguagem de programação versátil e de alto nível',
  },
  {
    id: 2,
    word: 'NODEJS',
    tip: 'Ambiente de execução JavaScript no lado do servidor',
  },
  {
    id: 3,
    word: 'DOCKER',
    tip: 'Plataforma para virtualização de contêineres',
  },
  { id: 4, word: 'GIT', tip: 'Sistema de controle de versão distribuído' },
  {
    id: 5,
    word: 'SQL',
    tip: 'Linguagem para manipulação de bancos de dados relacionais',
  },
]

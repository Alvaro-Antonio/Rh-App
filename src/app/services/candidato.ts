import { Selecao } from './selecao';

export class Candidato {
       id: number;
       aprovacao: boolean;
       avaliacaoGeral: string;
       nome: string;
       idade: number;
       numeroRg: string;
       numerocpf: string;
       telefone: string;
       endereco: string;
       dataNas: string;
       email: string;
       habilidades: string;
       selecao: Selecao;
}

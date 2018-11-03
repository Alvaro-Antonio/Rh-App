import { CargoService } from './cargo.service';
import { Funcionario } from './funcionario';
import { Candidato } from './candidato';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
// tslint:disable-next-line:import-blacklist
import { Observable} from 'rxjs/Rx';

import {Selecao} from './selecao';
import {ConfigService} from './config.service';
import { Cargo } from './cargo';

@Injectable({
  providedIn: 'root'
})
export class SelecaoService {

    private baseUrlService: string;
    private headers: Headers;
    private options: RequestOptions;
    private funcionario: Funcionario = new Funcionario();
    private cargo: Cargo;

    constructor(private http: Http,
                private configService: ConfigService, private cargos: CargoService) {

        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + 'selecao/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    /**CONSULTA TODAS AS Selecaos CADASTRADAS */
    getSelecoes() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    /**ADICIONA UMA NOVA Selecao */
    addSelecao(selecao: Selecao) {

        return this.http.post(this.baseUrlService, JSON.stringify(selecao), this.options).map(res => res.json());
    }
    /**EXCLUI UMA Selecao */
    excluirSelecao(id: number) {

        return this.http.delete(this.baseUrlService + id).map(res => res.json());
    }

    /**CONSULTA UMA Selecao PELO CÓDIGO */
    getSelecao(id: number) {

        return this.http.get(this.baseUrlService + id).map(res => res.json());
    }

    /**ATUALIZA INFORMAÇÕES DA Selecao */
    atualizarSelecao(selecao: Selecao) {

        return this.http.put(this.baseUrlService, JSON.stringify(selecao), this.options)
        .map(res => res.json());
    }
    addFunc(candidato: Candidato, cargo: Cargo ) {
      console.log(this.funcionario);
      this.funcionario.id = null;
      this.funcionario.nome = candidato.nome;
      this.funcionario.idade = candidato.idade;
      this.funcionario.numeroCPF = candidato.numerocpf;
      this.funcionario.numeroRG = candidato.numeroRg;
      this.funcionario.endereco = candidato.endereco;
      this.funcionario.cargo = cargo;
      this.funcionario.dataNas = candidato.dataNas;
      return this.http.post('selecao/novoFuncionario', JSON.stringify(this.funcionario), this.options).map(res => res.json());
    }
}

/*import { Candidato } from './candidato';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  lastId = 0;

  candidatos: Candidato[] = [];

  constructor() { }

  add(candidato: Candidato) {
    if (!candidato.id) {
      candidato.id = ++this.lastId;
    }

    this.candidatos.push(candidato);
  }

  delete(id: number) {
     this.candidatos = this.candidatos.filter(todo => todo.id !== id);
  }

  update(novoCandidato: Candidato): Candidato {
    const oldCandidato = this.candidatos.getById(novoCandidato.id);
    if (!oldCandidato) {
      return;
    }
  }
}*/
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
// tslint:disable-next-line:import-blacklist
import { Observable} from 'rxjs/Rx';
/*import { map, filter, scan } from "rxjs/operators";*/

import {Candidato} from './candidato';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

    private baseUrlService: string;
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + 'candidato/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    /**CONSULTA TODAS AS Candidatos CADASTRADAS */
    getCandidatos() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    /**ADICIONA UMA NOVA Candidato */
    addCandidato(candidato: Candidato) {

        return this.http.post(this.baseUrlService, JSON.stringify(candidato), this.options).map(res => res.json());
    }
    /**EXCLUI UMA Candidato */
    excluirCandidato(id: number) {

        return this.http.delete(this.baseUrlService + id).map(res => res.json());
    }

    /**CONSULTA UMA PESSOA PELO CÓDIGO */
    getCandidato(id: number) {

        return this.http.get(this.baseUrlService + id).map(res => res.json());
    }

    /**ATUALIZA INFORMAÇÕES DA Candidato */
    atualizarCandidato(candidato: Candidato) {

        return this.http.put(this.baseUrlService, JSON.stringify(candidato), this.options)
        .map(res => res.json());
    }

}

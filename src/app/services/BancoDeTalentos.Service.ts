import { BancoDeTalentos } from './banco-de-talentos';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
// tslint:disable-next-line:import-blacklist
import { Observable} from 'rxjs/Rx';

import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BancoDeTalentosService {

    private baseUrlService: string;
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + 'talento/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    /**CONSULTA TODAS AS BancoDeTalentos CADASTRADAS */
    getBancoDeTalentoss() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    /**ADICIONA UMA NOVA BancoDeTalents */
    addBancoDeTalentos(talento: BancoDeTalentos) {

        return this.http.post(this.baseUrlService, JSON.stringify(talento), this.options).map(res => res.json());
    }
    /**EXCLUI UMA Banco-De-BancoDeTalentos */
    excluirBancoDeTalentos(id: number) {

        return this.http.delete(this.baseUrlService + id).map(res => res.json());
    }

    /**CONSULTA UMA PESSOA PELO CÓDIGO */
    getBancoDeTalentos(id: number) {

        return this.http.get(this.baseUrlService + id).map(res => res.json());
    }

    /**ATUALIZA INFORMAÇÕES DA BancoDeTalentos */
    atualizarBancoDeTalentos(talento: BancoDeTalentos) {

        return this.http.put(this.baseUrlService, JSON.stringify(talento), this.options)
        .map(res => res.json());
    }

}

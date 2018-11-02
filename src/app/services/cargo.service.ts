import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
// tslint:disable-next-line:import-blacklist
import { Observable} from 'rxjs/Rx';

import {Cargo} from './cargo';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

    private baseUrlService: string;
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + 'cargo/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    /**CONSULTA TODAS AS Cargos CADASTRADAS */
    getCargos() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    /**ADICIONA UMA NOVA Cargo */
    addCargo(cargo: Cargo) {

        return this.http.post(this.baseUrlService, JSON.stringify(cargo), this.options).map(res => res.json());
    }
    /**EXCLUI UMA Cargo */
    excluirCargo(id: number) {

        return this.http.delete(this.baseUrlService + id).map(res => res.json());
    }

    /**CONSULTA UMA PESSOA PELO CÓDIGO */
    getCargo(id: number) {

        return this.http.get(this.baseUrlService + id).map(res => res.json());
    }

    /**ATUALIZA INFORMAÇÕES DA Cargo */
    atualizarCargo(cargo: Cargo) {

        return this.http.put(this.baseUrlService, JSON.stringify(cargo), this.options)
        .map(res => res.json());
    }

}

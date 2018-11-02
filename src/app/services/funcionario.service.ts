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

import {Funcionario} from './funcionario';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

    private baseUrlService: string;
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + 'funcionario/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    /**CONSULTA TODAS AS Funcionarios CADASTRADAS */
    getFuncionarios() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    /**ADICIONA UMA NOVA Funcionario */
    addFuncionario(funcionario: Funcionario) {

        return this.http.post(this.baseUrlService, JSON.stringify(funcionario), this.options).map(res => res.json());
    }
    /**EXCLUI UMA Funcionario */
    excluirFuncionario(id: number) {

        return this.http.delete(this.baseUrlService + id).map(res => res.json());
    }

    /**CONSULTA UMA PESSOA PELO CÓDIGO */
    getFuncionario(id: number) {

        return this.http.get(this.baseUrlService + id).map(res => res.json());
    }

    /**ATUALIZA INFORMAÇÕES DA Funcionario */
    atualizarFuncionario(funcionario: Funcionario) {

        return this.http.put(this.baseUrlService, JSON.stringify(funcionario), this.options)
        .map(res => res.json());
    }

}

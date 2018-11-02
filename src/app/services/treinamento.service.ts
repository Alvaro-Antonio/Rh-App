import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Treinamento } from './treinamento';
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class TreinamentoService {
  private baseUrlService: string;
  private headers: Headers;
  private options: RequestOptions;
  constructor(private http: Http, private configService: ConfigService) {
    /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
    this.baseUrlService = configService.getUrlService() + 'treinamento/';
    /*ADICIONANDO O JSON NO HEADER */
    this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  /**CONSULTA TODAS AS Treinamentos CADASTRADAS */
  getTreinamentos() {
    return this.http.get(this.baseUrlService).map(res => res.json());
  }
  /**ADICIONA UMA NOVA Treinamento */
  addTreinamento(treinamento: Treinamento) {
    return this.http.post(this.baseUrlService, JSON.stringify(treinamento), this.options).map(res => res.json());
  }
  /**EXCLUI UMA Treinamento */
  excluirTreinamento(id: number) {
    return this.http.delete(this.baseUrlService + id).map(res => res.json());
  }
  /**CONSULTA UMA PESSOA PELO CÓDIGO */
  getTreinamento(id: number) {
    return this.http.get(this.baseUrlService + id).map(res => res.json());
  }
  /**ATUALIZA INFORMAÇÕES DA Treinamento */
  atualizarTreinamento(treinamento: Treinamento) {
    return this.http.put(this.baseUrlService, JSON.stringify(treinamento), this.options)
      .map(res => res.json());
  }
}

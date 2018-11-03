import { CargoService } from './../../services/cargo.service';
import { CandidatoService } from './../../services/candidato.service';
import { Candidato } from './../../services/candidato';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Selecao } from '../../services/selecao';
import { Response } from '../../services/Response';
import { SelecaoService } from 'src/app/services/selecao.service.';
import { Cargo } from 'src/app/services/cargo';


@Component({
    selector: 'app-admitir-candidato',
    templateUrl: './admitir-candidato.component.html',
    styleUrls: [ './admitir-candidato.component.css']
  })
  export class AdmitirCandidatoComponent implements OnInit {

    private selecoes: Selecao[] = new Array();
    private candidatos: Candidato[] = new Array();
    private cargos: Cargo[] = new Array();
    private titulo: string;

    constructor(private selecaoService: SelecaoService, private candidatoService: CandidatoService,
                private cargoService: CargoService, private router: Router) {}

    ngOnInit() {

      /*SETA O TÍTULO */
      this.titulo = 'Registros Cadastrados';

      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.selecaoService.getSelecoes().subscribe(res => this.selecoes = res);
      this.candidatoService.getCandidatos().subscribe(res => this.candidatos = res);
      this.cargoService.getCargos().subscribe(res => this.cargos = res);
    }
    // aprovar(id: number)
    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA
     * LINHA DA TABELA*/
    excluir(id: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.selecaoService.excluirSelecao(id).subscribe(response => {

              /**PEGA O RESPONSE DO SERVIÇO */
              // tslint:disable-next-line:prefer-const
              let res: Response = <Response>response;

              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              // tslint:disable-next-line:triple-equals
              if (res.id == 1) {
                alert(res.mensagem);
                this.selecoes.splice(index, 1);

              } else {
                /*0 = EXCEPTION GERADA NO SERVIÇO JAVA */
                alert(res.mensagem);
              }
              window.location.reload();
          },
          (erro) => {
               /*MOSTRA ERROS NÃO TRATADOS */
               alert(erro);
          });
      }

    }

    editar(id: number): void {

      this.router.navigate(['/cadastro-selecao', id]);

    }
    contratar(candidato: Candidato, cargo: Cargo, index: number): void {
      if (confirm('Deseja realmente Contratar esse Candidato?')) {

        /*CHAMA O SERVIÇO PARA REALIZAR A inclusão */
        this.selecaoService.addFunc(candidato, cargo).subscribe(response => {

              /**PEGA O RESPONSE DO SERVIÇO */
              // tslint:disable-next-line:prefer-const
              let res: Response = <Response>response;

              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS incluimos
              O REGISTRO DA TABELA HTML*/
              // tslint:disable-next-line:triple-equals
              if (res.id == 1) {
                alert(res.mensagem);
                this.selecoes.splice(index, 1);

              } else {
                /*0 = EXCEPTION GERADA NO SERVIÇO JAVA */
                alert(res.mensagem);
              }
              window.location.reload();
          },
          (erro) => {
               /*MOSTRA ERROS NÃO TRATADOS */
               alert(erro);
          });
      }

    }
  }

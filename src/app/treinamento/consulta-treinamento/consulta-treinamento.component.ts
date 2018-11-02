import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Treinamento } from '../../services/treinamento';

import { Response } from '../../services/Response';
import { TreinamentoService } from 'src/app/services/treinamento.service';


@Component({
    selector: 'app-consulta-treinamento',
    templateUrl: './consulta-treinamento.component.html',
    styleUrls: [ './consulta-treinamento.component.css']
  })
  export class ConsultaTreinamentoComponent implements OnInit {

    private treinamentos: Treinamento[] = new Array();
    private titulo: string;

    constructor(private treinamentoService: TreinamentoService,
                private router: Router) {}

    ngOnInit() {

      /*SETA O TÍTULO */
      this.titulo = 'Registros Cadastrados';

      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.treinamentoService.getTreinamentos().subscribe(res => this.treinamentos = res);
    }

    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA
     * LINHA DA TABELA*/
    excluir(id: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.treinamentoService.excluirTreinamento(id).subscribe(response => {

              /**PEGA O RESPONSE DO SERVIÇO */
              // tslint:disable-next-line:prefer-const
              let res: Response = <Response>response;

              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              // tslint:disable-next-line:triple-equals
              if (res.id == 1) {
                alert(res.mensagem);
                this.treinamentos.splice(index, 1);
              } else {
                /*0 = EXCEPTION GERADA NO SERVIÇO JAVA */
                alert(res.mensagem);
              }
          },
          (erro) => {
               /*MOSTRA ERROS NÃO TRATADOS */
               alert(erro);
          });
      }

    }

    editar(id: number): void {

      this.router.navigate(['/cadastro-treinamento', id]);

    }

  }


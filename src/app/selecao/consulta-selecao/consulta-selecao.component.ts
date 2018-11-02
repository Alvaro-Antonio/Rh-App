import { Response } from './../../services/Response';
import { Component, OnInit } from '@angular/core';
import { SelecaoService } from 'src/app/services/selecao.service.';
import { Router } from '@angular/router';
import { Selecao } from 'src/app/services/selecao';

@Component({
  selector: 'app-consulta-selecao',
  templateUrl: './consulta-selecao.component.html',
  styleUrls: ['./consulta-selecao.component.css']
})
export class ConsultaSelecaoComponent implements OnInit {
    private selecoes: Selecao[] = new Array();
    private titulo: string;

    constructor(private selecaoService: SelecaoService,
                private router: Router) {}

    ngOnInit() {

      /*SETA O TÍTULO */
      this.titulo = 'Registros Cadastrados';

      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.selecaoService.getSelecaos().subscribe(res => this.selecoes = res);
    }

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

  }


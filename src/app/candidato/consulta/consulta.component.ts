import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Candidato } from '../../services/candidato';
import { CandidatoService } from '../../services/candidato.service';
import { Response } from '../../services/Response';


@Component({
    selector: 'app-consulta-candidato',
    templateUrl: './consulta.component.html',
    styleUrls: [ './consulta.component.css']
  })
  export class ConsultaComponent implements OnInit {

    private candidatos: Candidato[] = new Array();
    private titulo: string;

    constructor(private candidatoService: CandidatoService,
                private router: Router) {}

    ngOnInit() {

      /*SETA O TÍTULO */
      this.titulo = 'Registros Cadastrados';

      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.candidatoService.getCandidatos().subscribe(res => this.candidatos = res);
    }

    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA
     * LINHA DA TABELA*/
    excluir(id: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.candidatoService.excluirCandidato(id).subscribe(response => {

              /**PEGA O RESPONSE DO SERVIÇO */
              // tslint:disable-next-line:prefer-const
              let res: Response = <Response>response;

              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              // tslint:disable-next-line:triple-equals
              if (res.id == 1) {
                alert(res.mensagem);
                this.candidatos.splice(index, 1);
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

      this.router.navigate(['/cadastro-candidato', id]);

    }

  }

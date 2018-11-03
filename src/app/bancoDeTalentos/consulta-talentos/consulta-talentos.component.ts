import { Response } from './../../services/Response';
import { Component, OnInit } from '@angular/core';
import { BancoDeTalentosService } from 'src/app/services/BancoDeTalentos.Service';
import { BancoDeTalentos } from 'src/app/services/banco-de-talentos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consulta-talentos',
  templateUrl: './consulta-talentos.component.html',
  styleUrls: ['./consulta-talentos.component.css']
})
export class ConsultaTalentosComponent implements OnInit {

  private talentos: BancoDeTalentos[] = new Array();
    private titulo: string;

    constructor(private cargoService: BancoDeTalentosService,
                private router: Router) {}

    ngOnInit() {

      /*SETA O TÍTULO */
      this.titulo = 'Registros Cadastrados';

      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.cargoService.getBancoDeTalentoss().subscribe(res => this.talentos = res);
    }

    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA
     * LINHA DA TABELA*/
    excluir(id: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.cargoService.excluirBancoDeTalentos(id).subscribe(response => {

              /**PEGA O RESPONSE DO SERVIÇO */
              // tslint:disable-next-line:prefer-const
              let res: Response = <Response>response;

              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              // tslint:disable-next-line:triple-equals
              if (res.id == 1) {
                alert(res.mensagem);
                this.talentos.splice(index, 1);

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

      this.router.navigate(['/cadastro-cargo', id]);

    }

  }

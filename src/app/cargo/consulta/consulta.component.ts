import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Cargo } from '../../services/cargo';
import { CargoService } from '../../services/cargo.service';
import { Response } from '../../services/Response';


@Component({
    selector: 'app-consulta-cargo',
    templateUrl: './consulta.component.html',
    styleUrls: [ './consulta.component.css']
  })
  export class ConsultaCargoComponent implements OnInit {

    private cargos: Cargo[] = new Array();
    private titulo: string;

    constructor(private cargoService: CargoService,
                private router: Router) {}

    ngOnInit() {

      /*SETA O TÍTULO */
      this.titulo = 'Registros Cadastrados';

      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.cargoService.getCargos().subscribe(res => this.cargos = res);
    }

    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA
     * LINHA DA TABELA*/
    excluir(id: number, index: number): void {

      if (confirm('Deseja realmente excluir esse registro?')) {

        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.cargoService.excluirCargo(id).subscribe(response => {

              /**PEGA O RESPONSE DO SERVIÇO */
              // tslint:disable-next-line:prefer-const
              let res: Response = <Response>response;

              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              // tslint:disable-next-line:triple-equals
              if (res.id == 1) {
                alert(res.mensagem);
                this.cargos.splice(index, 1);
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

      this.router.navigate(['/cadastro-cargo', id]);

    }

  }

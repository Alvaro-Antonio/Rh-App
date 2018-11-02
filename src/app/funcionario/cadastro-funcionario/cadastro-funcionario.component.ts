import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Funcionario } from '../../services/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';
import { Response } from '../../services/Response';
import { Cargo } from 'src/app/services/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
    selector: 'app-cadastro-funcionario',
    templateUrl: './cadastro-funcionario.component.html',
    styleUrls: ['./cadastro-funcionario.component.css']
  })
  export class CadastroFuncionarioComponent implements OnInit {

    private titulo: string;
    private funcionario: Funcionario = new Funcionario();
    private cargos: Cargo [] = new Array();

    constructor(private funcionarioService: FuncionarioService, private cargoService: CargoService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {}

  /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {

      this.activatedRoute.params.subscribe(parametro => {
        this.cargoService.getCargos();
        // tslint:disable-next-line:triple-equals
        if (parametro['id'] == undefined) {

          this.titulo = 'Novo Cadastro de Funcionario';
        } else {
        this.titulo = 'Editar Cadastro de Funcionario';
          this.funcionarioService.getFuncionario(Number(parametro['id'])).subscribe(res => this.funcionario = res);
        }

      });
    }

    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    salvar(): void {
           console.log(this.funcionario);
           this.cargoService.getCargos();
/*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
      // tslint:disable-next-line:triple-equals
      if (this.funcionario.id == undefined) {

        /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
        this.funcionarioService.addFuncionario(this.funcionario).subscribe(response => {

      console.log(response);
         // PEGA O RESPONSE DO RETORNO DO SERVIÇO
           // tslint:disable-next-line:prefer-const
           let res: Response = <Response>response;

           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           // tslint:disable-next-line:triple-equals
           if ( res.id == 1) {
            alert (res.mensagem);
            this.funcionario = new Funcionario();
           } else {
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             alert(res.mensagem);
           }
         },
         (erro) => {
           /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */
            alert(erro);
         });

      }   else {

        /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
        this.funcionarioService.atualizarFuncionario(this.funcionario).subscribe(response => {

       // PEGA O RESPONSE DO RETORNO DO SERVIÇO
        // tslint:disable-next-line:prefer-const
        let res: Response = <Response>response;

         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
        // tslint:disable-next-line:triple-equals
        if (res.id == 1) {
          alert(res.mensagem);
          this.router.navigate(['/consulta-funcionario']);
        } else {
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
           alert(res.mensagem);
         }
       },
       (erro) => {
         /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
          EXEMPLO: SE iAPLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */
console.log(erro);
       });
      }

    }
  }

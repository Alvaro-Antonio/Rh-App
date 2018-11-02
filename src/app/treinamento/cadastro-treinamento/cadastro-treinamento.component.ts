import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Treinamento } from '../../services/treinamento';
import { Response } from '../../services/Response';
import { TreinamentoService } from 'src/app/services/treinamento.service';

@Component({
    selector: 'app-cadastro-treinamento',
    templateUrl: './cadastro-treinamento.component.html',
    styleUrls: ['./cadastro-treinamento.component.css']
  })
  export class CadastroTreinamentoComponent implements OnInit {

    private titulo: string;
    private treinamento: Treinamento = new Treinamento();

    constructor(private treinamentoService: TreinamentoService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {}

  /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {

      this.activatedRoute.params.subscribe(parametro => {

        // tslint:disable-next-line:triple-equals
        if (parametro['id'] == undefined) {

          this.titulo = 'Novo Cadastro de Treinamento';
        } else {
        this.titulo = 'Editar Cadastro de Treinamento';
          this.treinamentoService.getTreinamento(Number(parametro['id'])).subscribe(res => this.treinamento = res);
        }

      });
    }

    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    salvar(): void {
           console.log(this.treinamento);

/*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
      // tslint:disable-next-line:triple-equals
      if (this.treinamento.id == undefined) {

        /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
        this.treinamentoService.addTreinamento(this.treinamento).subscribe(response => {

      console.log(response);
         // PEGA O RESPONSE DO RETORNO DO SERVIÇO
           // tslint:disable-next-line:prefer-const
           let res: Response = <Response>response;

           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           // tslint:disable-next-line:triple-equals
           if ( res.id == 1) {
            alert (res.mensagem);
            this.treinamento = new Treinamento();
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
        this.treinamentoService.atualizarTreinamento(this.treinamento).subscribe(response => {

       // PEGA O RESPONSE DO RETORNO DO SERVIÇO
        // tslint:disable-next-line:prefer-const
        let res: Response = <Response>response;

         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
        // tslint:disable-next-line:triple-equals
        if (res.id == 1) {
          alert(res.mensagem);
          this.router.navigate(['/consulta-treinamento']);
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

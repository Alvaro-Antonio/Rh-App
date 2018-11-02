import { Response } from './../../services/Response';
import { Component, OnInit } from '@angular/core';
import { Selecao } from 'src/app/services/selecao';
import { SelecaoService } from 'src/app/services/selecao.service.';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-selecao',
  templateUrl: './cadastro-selecao.component.html',
  styleUrls: ['./cadastro-selecao.component.css']
})
export class CadastroSelecaoComponent implements OnInit {
        private titulo: string;
      private selecao: Selecao = new Selecao();

      constructor(private selecaoService: SelecaoService,
                  private router: Router,
                  private activatedRoute: ActivatedRoute) {}

    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
      ngOnInit() {

        this.activatedRoute.params.subscribe(parametro => {

          // tslint:disable-next-line:triple-equals
          if (parametro['id'] == undefined) {

            this.titulo = 'Novo Cadastro de Selecao';
          } else {
          this.titulo = 'Editar Cadastro de Selecao';
            this.selecaoService.getSelecao(Number(parametro['id'])).subscribe(res => this.selecao = res);
          }

        });
      }

      /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
      salvar(): void {
             console.log(this.selecao);

  /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
        // tslint:disable-next-line:triple-equals
        if (this.selecao.id == undefined) {

          /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
          this.selecaoService.addSelecao(this.selecao).subscribe(response => {

        console.log(response);
           // PEGA O RESPONSE DO RETORNO DO SERVIÇO
             // tslint:disable-next-line:prefer-const
             let res: Response = <Response>response;

             /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
             E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
             // tslint:disable-next-line:triple-equals
             if ( res.id == 1) {
              alert (res.mensagem);
              this.selecao = new Selecao();
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
          this.selecaoService.atualizarSelecao(this.selecao).subscribe(response => {

         // PEGA O RESPONSE DO RETORNO DO SERVIÇO
          // tslint:disable-next-line:prefer-const
          let res: Response = <Response>response;

           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
             E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
          // tslint:disable-next-line:triple-equals
          if (res.id == 1) {
            alert(res.mensagem);
            this.router.navigate(['/consulta-selecao']);
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


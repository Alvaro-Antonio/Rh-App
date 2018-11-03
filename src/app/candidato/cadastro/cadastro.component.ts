import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Candidato } from '../../services/candidato';
import { CandidatoService } from '../../services/candidato.service';
import { Response } from '../../services/Response';
import { Selecao } from 'src/app/services/selecao';
import { SelecaoService } from 'src/app/services/selecao.service.';

@Component({
    selector: 'app-cadastro-candidato',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
  })
  export class CadastroCandidatoComponent implements OnInit {

    private titulo: string;
    private candidato: Candidato = new Candidato();
    private selecoes: Selecao[] = new Array();

    constructor(private candidatoService: CandidatoService,private selecaoService: SelecaoService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {}

  /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {
      this.selecaoService.getSelecoes().subscribe(res => this.selecoes = res);
      this.activatedRoute.params.subscribe(parametro => {

        // tslint:disable-next-line:triple-equals
        if (parametro['id'] == undefined) {

          this.titulo = 'Novo Cadastro de Candidato';
        } else {
        this.titulo = 'Editar Cadastro de Candidato';
          this.candidatoService.getCandidato(Number(parametro['id'])).subscribe(res => this.candidato = res);
        }

      });
    }
    /*para testar se existe selecao e mudar layout */
    getClass() {
      if (this.selecoes.length < 1) {
        return 'someCadastro';
      } else {
        return 'apareceCadastro'; }
    }
    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    salvarCandidato(): void {
           console.log(this.candidato);
/*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
      // tslint:disable-next-line:triple-equals
      if (this.candidato.id == undefined) {

        /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
        this.candidatoService.addCandidato(this.candidato).subscribe(response => {

console.log(response);
         // PEGA O RESPONSE DO RETORNO DO SERVIÇO
           // tslint:disable-next-line:prefer-const
           let res: Response = <Response>response;

           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           // tslint:disable-next-line:triple-equals
           if ( res.id == 1) {
            alert (res.mensagem);
            this.candidato = new Candidato();
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
        this.candidatoService.atualizarCandidato(this.candidato).subscribe(response => {

       // PEGA O RESPONSE DO RETORNO DO SERVIÇO
        // tslint:disable-next-line:prefer-const
        let res: Response = <Response>response;

         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
        // tslint:disable-next-line:triple-equals
        if (res.id == 1) {
          alert(res.mensagem);
          this.router.navigate(['/consulta-candidato']);
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

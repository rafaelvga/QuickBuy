import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]

})

export class LoginComponent implements OnInit {
    ngOnInit(): void {
      this.usuario = new Usuario();
      this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    }

  public usuario;
  public returnUrl: string;
  public mensagem: string;
  private ativar_spinner: boolean;

  constructor(private router: Router, private activatedRouter: ActivatedRoute,
    private usuarioServico: UsuarioServico) {
    

  }
  public enderecoImagem ="https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg"

  entrar() {

    this.ativar_spinner = true;

    this.usuarioServico.verificarUsuario(this.usuario).subscribe(
      usuario_json => {
        this.usuarioServico.usuario = usuario_json;
        //var usuarioRetorno: Usuario;
        //usuarioRetorno = data;
        //sessionStorage.setItem("usuario-autenticado", "1");
        //sessionStorage.setItem("email-usuario", usuarioRetorno.email);

        if (this.returnUrl == null)
          this.router.navigate(['/']);
        else
          this.router.navigate([this.returnUrl]);
      },
      err => {
        console.log(err.error);
        this.mensagem = err.error;
        this.ativar_spinner = false;
      }
    );

    //if (this.usuario.email == "rafaelvga@yahoo.com.br") {
    //  sessionStorage.setItem("usuario-autenticado", "1");
    //  this.router.navigate([this.returnUrl]);
    //}

  }

}

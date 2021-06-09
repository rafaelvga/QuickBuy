import { Component } from "@angular/core"

@Component({
  selector: "app-produto",
  template: "./produto.component.html",
  styleUrls:["produto.component.css"]
})

export class ProdutoComponent {
  public id: number;
  public nome: string;
  preco: number;

  public obterNome(): string {
    return "teste";
  }

}

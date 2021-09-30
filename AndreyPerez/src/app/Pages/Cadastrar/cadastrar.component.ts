import { cadastrarService } from './../../Service/cadastrar.service';
import { Pessoa } from "../../Models/Pessoa";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
    selector: "app-home",
    templateUrl: "./cadastrar.component.html",
    styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
    pessoa: Pessoa = {
        nome: '',
        profissao: '',
        gostoMusical: '',
        genero: ''
      }; 
    constructor(private service: cadastrarService, private router: Router) {}

    ngOnInit(): void {
        this.pessoa = {
            nome: '',
            profissao: '',
            gostoMusical: '',
            genero: ''
          };  
    }

    criar(): void {
        console.log(this.pessoa)
        this.service.criar(this.pessoa).subscribe(resposta => {
          this.router.navigate([""]);
        });
      }
}

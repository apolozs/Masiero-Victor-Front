import { listarService } from './../../Service/listar.service';
// import { Pessoa } from "src/app/models/Pessoa";
import { Component, OnInit } from "@angular/core";
import { Pessoa } from 'src/app/Models/Pessoa';
// import { PessoaService } from "../../services/quarto.service";

@Component({
    selector: "app-home",
    templateUrl: "./listar.component.html",
    styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
    pessoas: Pessoa[] = []
    constructor(private service: listarService) {}

    ngOnInit(): void {
        this.service.listar().subscribe((listaPessoa) =>{
        this.pessoas = listaPessoa
        console.log(listaPessoa);
        });
    }
}

import { Pessoa } from '../Models/Pessoa';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root",
})
export class listarService {
   
    private baseURL = "https://localhost:5001/api/pessoa";

    constructor(private http: HttpClient) {}

    listar(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>('https://localhost:5001/api/pessoa/list');
      }
}

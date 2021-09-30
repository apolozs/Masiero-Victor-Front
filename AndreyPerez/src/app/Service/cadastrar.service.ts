
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class cadastrarService {
    
    private baseURL = "https://localhost:5001/api/pessoa";
   

    constructor(private http: HttpClient) {}

    criar(pessoa: any) {
        return this.http.post(`${this.baseURL}/create`, pessoa);
    }
}

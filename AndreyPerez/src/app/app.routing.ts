import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarComponent } from "./Pages/Cadastrar/cadastrar.component";
import { ListarComponent } from "./Pages/Listar/listar.component";

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}

const APP_ROUTES: Routes = [
    { path: '', component: ListarComponent },
    { path: 'Cadastrar', component: CadastrarComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbbHomeComponent } from './home/abb-home.component';
import {AbbServicoComponent} from './abb-servico/abb-servico.component';
import {AbbContatoComponent} from './abb-contato/abb-contato.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: AbbHomeComponent,  data: {title: 'Home'} },
    { path: 'servico', component: AbbServicoComponent, data: {title: 'Serviço'}},
    { path: 'contato', component: AbbContatoComponent, data: {title: 'Contato'} },
    { path: 'sobre', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


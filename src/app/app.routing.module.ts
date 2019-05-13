import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbbHomeComponent } from './home/abb-home.component';
import { AbbServicoComponent } from './abb-servico/abb-servico.component';
import { AbbContatoComponent } from './abb-contato/abb-contato.component';
import { AbbSobreComponent } from './abb-sobre/abb-sobre.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: AbbHomeComponent, data: { title: 'Home' } },
    { path: 'servico', component: AbbServicoComponent, data: { title: 'Serviço' } },
    { path: 'contato', component: AbbContatoComponent, data: { title: 'Contato' } },
    { path: 'sobre', component: AbbSobreComponent, data: { title: 'Sobre' } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


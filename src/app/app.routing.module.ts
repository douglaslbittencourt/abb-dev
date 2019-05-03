import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/abb-home.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent,  data: {title: 'Home'} },
    { path: 'servico', redirectTo: 'servico' },
    { path: 'contato', redirectTo: 'home' },
    { path: 'sobre', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


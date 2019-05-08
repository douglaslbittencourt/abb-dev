import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/abb-shared.module';
import {AbbServicoComponent} from './abb-servico.component';
import {AbbSolucoesComponent} from "./abb-solucoes/abb-solucoes.component";

@NgModule({
  declarations: [AbbServicoComponent, AbbSolucoesComponent],
    imports: [CommonModule, RouterModule, SharedModule]
})
export class AbbServicoModule {

}

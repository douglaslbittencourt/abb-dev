import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/abb-shared.module';
import {AbbContatoComponent} from './abb-contato.component';
import {AbbMapaComponent} from "./abb-mapa/abb-mapa.component";
import {AbbInfoEmailComponent} from "./abb-info-email/abb-info-email.component";

@NgModule({
  declarations: [AbbContatoComponent, AbbMapaComponent, AbbInfoEmailComponent],
    imports: [CommonModule, RouterModule, SharedModule]
})
export class AbbContatoModule {

}

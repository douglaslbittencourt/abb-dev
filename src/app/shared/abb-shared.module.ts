import {NgModule} from '@angular/core';
import {AbbMissaoComponent} from './abb-missao/abb-missao.component';
import {AbbTopHeaderComponent} from './abb-top-header/abb-top-header.component';
import {AbbMapaComponent} from "./abb-mapa/abb-mapa.component";
import {AbbSolucoesComponent} from "./abb-solucoes/abb-solucoes.component";


@NgModule({
  exports: [
    AbbMissaoComponent,
    AbbTopHeaderComponent,
    AbbMapaComponent,
    AbbSolucoesComponent
  ],
  declarations: [AbbMissaoComponent, AbbTopHeaderComponent, AbbMapaComponent, AbbSolucoesComponent]
})
export class SharedModule {

}

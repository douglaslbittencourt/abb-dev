import {NgModule} from '@angular/core';
import {AbbMissaoComponent} from './abb-missao/abb-missao.component';
import {TopHeaderComponent} from './top-header/top-header.component';
import {AbbMapaComponent} from "./abb-mapa/abb-mapa.component";
import {AbbServicoComponent} from "./abb-servico/abb-servico.component";


@NgModule({
  exports: [
    AbbMissaoComponent,
    TopHeaderComponent,
    AbbMapaComponent,
    AbbServicoComponent
  ],
  declarations: [AbbMissaoComponent, TopHeaderComponent, AbbMapaComponent, AbbServicoComponent]
})
export class SharedModule {

}

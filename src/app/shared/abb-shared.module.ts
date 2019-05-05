import {NgModule} from '@angular/core';
import {AbbMissaoComponent} from './abb-missao/abb-missao.component';
import {AbbTopHeaderComponent} from './abb-top-header/abb-top-header.component';
import {AbbMapaComponent} from "./abb-mapa/abb-mapa.component";
import {AbbServicoComponent} from "./abb-servico/abb-servico.component";


@NgModule({
  exports: [
    AbbMissaoComponent,
    AbbTopHeaderComponent,
    AbbMapaComponent,
    AbbServicoComponent
  ],
  declarations: [AbbMissaoComponent, AbbTopHeaderComponent, AbbMapaComponent, AbbServicoComponent]
})
export class SharedModule {

}

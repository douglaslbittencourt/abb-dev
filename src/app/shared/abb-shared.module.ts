import {NgModule} from '@angular/core';
import {AbbMissaoComponent} from './abb-missao/abb-missao.component';
import {TopHeaderComponent} from './top-header/top-header.component';
import {AbbMapaComponent} from "./abb-mapa/abb-mapa.component";

@NgModule({
  exports: [
    AbbMissaoComponent,
    TopHeaderComponent,
    AbbMapaComponent
  ],
  declarations: [AbbMissaoComponent, TopHeaderComponent, AbbMapaComponent]
})
export class SharedModule {

}

import {NgModule} from '@angular/core';
import {AbbMissaoComponent} from './abb-missao/abb-missao.component';
import {AbbTopHeaderComponent} from './abb-top-header/abb-top-header.component';
import { AbbImagemComponent } from './abb-imagem/abb-imagem-component';


@NgModule({
  exports: [
    AbbMissaoComponent,
    AbbTopHeaderComponent,
    AbbImagemComponent
  ],
  declarations: [AbbMissaoComponent, AbbTopHeaderComponent, AbbImagemComponent]
})
export class SharedModule {

}

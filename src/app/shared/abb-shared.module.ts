import {NgModule} from '@angular/core';
import {AbbMissaoComponent} from './abb-missao/abb-missao.component';
import {TopHeaderComponent} from './top-header/top-header.component';

@NgModule({
  exports: [
    AbbMissaoComponent,
    TopHeaderComponent
  ],
  declarations: [AbbMissaoComponent, TopHeaderComponent]
})
export class SharedModule {

}

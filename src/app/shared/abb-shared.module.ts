import { NgModule } from '@angular/core';
import { AbbMissaoComponent } from './abb-missao/abb-missao.component';
import { AbbTopHeaderComponent } from './abb-top-header/abb-top-header.component';
import { AbbImagemComponent } from './abb-imagem/abb-imagem-component';
import { AbbHeaderComponent } from './abb-header/abb-header.component';
import { AbbFooterComponent } from './abb-footer/abb-footer.component';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    AbbMissaoComponent,
    AbbTopHeaderComponent,
    AbbImagemComponent,
    AbbHeaderComponent,
    AbbFooterComponent
  ],
  declarations: [AbbMissaoComponent, AbbTopHeaderComponent, AbbImagemComponent, AbbHeaderComponent, AbbFooterComponent]
})
export class SharedModule {

}

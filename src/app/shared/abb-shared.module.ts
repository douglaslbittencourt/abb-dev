import { AbbBannerComponent } from './abb-banner/abb-banner.component';
import { NgModule } from '@angular/core';
import { AbbMissaoComponent } from './abb-missao/abb-missao.component';
import { AbbImagemComponent } from './abb-imagem/abb-imagem-component';
import { AbbHeaderComponent } from './abb-header/abb-header.component';
import { AbbFooterComponent } from './abb-footer/abb-footer.component';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule
  ],
  exports: [
    AbbMissaoComponent,
    AbbImagemComponent,
    AbbHeaderComponent,
    AbbFooterComponent,
    AbbBannerComponent
  ],
  declarations: [AbbMissaoComponent, AbbImagemComponent, AbbHeaderComponent, AbbFooterComponent, AbbBannerComponent]
})
export class SharedModule {

}

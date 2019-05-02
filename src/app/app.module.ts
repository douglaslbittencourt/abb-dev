import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { AbbMissaoComponent } from './abb-missao/abb-missao.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbCarousel,
    CarouselBasicComponent,
    AbbMissaoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

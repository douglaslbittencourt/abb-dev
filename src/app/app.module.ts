import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbCarousel,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

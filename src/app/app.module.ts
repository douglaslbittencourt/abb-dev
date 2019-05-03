import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AbbEquipeComponent } from './abb-equipe/abb-equipe.component';
import { AbbMissaoComponent } from './shared/abb-missao/abb-missao.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/abb-home.module';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AbbMissaoComponent,
    AbbEquipeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

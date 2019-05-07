import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import {SharedModule} from './shared/abb-shared.module';
import { AbbHomeModule } from './home/abb-home.module';
import { AbbServicoModule } from './abb-servico/abb-servico.module';
import { AbbContatoModule } from "./abb-contato/abb-contato.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AbbHomeModule,
    AbbServicoModule,
    AbbContatoModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

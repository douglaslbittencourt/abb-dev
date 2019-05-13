import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AbbContatoModule } from './abb-contato/abb-contato.module';
import { AbbServicoModule } from './abb-servico/abb-servico.module';
import { AbbSobreModule } from './abb-sobre/abb-sobre.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AbbHomeModule } from './home/abb-home.module';
import { SharedModule } from './shared/abb-shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    AbbHomeModule,
    AbbServicoModule,
    AbbContatoModule,
    AbbSobreModule,
    AppRoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

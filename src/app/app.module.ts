import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AbbMissaoComponent } from './abb-missao/abb-missao.component';
import { AbbEquipeComponent } from './abb-equipe/abb-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AbbMissaoComponent,
    AbbEquipeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

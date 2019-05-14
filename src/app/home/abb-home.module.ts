import { NgModule } from '@angular/core';
import { AbbHomeComponent } from './abb-home.component';
import { AbbCarousel} from './abb-carousel/abb-carousel';
import { AbbParceirosComponent } from './abb-parceiros/abb-parceiros.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../shared/abb-shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    declarations: [AbbHomeComponent, AbbCarousel, AbbParceirosComponent],
  imports: [CommonModule, RouterModule, SharedModule, NgbModule, MDBBootstrapModule]
})
export class AbbHomeModule {

}

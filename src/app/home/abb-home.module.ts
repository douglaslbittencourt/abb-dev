import { NgModule } from '@angular/core';
import { AbbHomeComponent } from './abb-home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../shared/abb-shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    declarations: [AbbHomeComponent],
    imports: [CommonModule, RouterModule, SharedModule]
})
export class AbbHomeModule {

}

import { NgModule } from '@angular/core';
import { AbbHomeComponent } from './abb-home.component';
import { AbbCarousel} from './abb-carousel/abb-carousel';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../shared/abb-shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [AbbHomeComponent, AbbCarousel],
    imports: [CommonModule, RouterModule, SharedModule, NgbModule]
})
export class AbbHomeModule {

}

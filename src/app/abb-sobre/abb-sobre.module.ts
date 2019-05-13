import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { SharedModule } from '../shared/abb-shared.module';
import { AbbEquipeComponent } from './abb-equipe/abb-equipe.component';
import { AbbQuemSomosComponent } from './abb-quem-somos/abb-quem-somos.component';
import { AbbSobreComponent } from './abb-sobre.component';

@NgModule({
    declarations: [AbbSobreComponent, AbbQuemSomosComponent, AbbEquipeComponent],
    imports: [CommonModule, RouterModule, SharedModule, NgbModule, MDBBootstrapModule]
})
export class AbbSobreModule {

}

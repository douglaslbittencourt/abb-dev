import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbSolucoesComponent } from './abb-solucoes.component';

describe('AbbSolucoesComponent', () => {
  let component: AbbSolucoesComponent;
  let fixture: ComponentFixture<AbbSolucoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbSolucoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbSolucoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

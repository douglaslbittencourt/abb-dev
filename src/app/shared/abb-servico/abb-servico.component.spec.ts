import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbServicoComponent } from './abb-servico.component';

describe('AbbServicoComponent', () => {
  let component: AbbServicoComponent;
  let fixture: ComponentFixture<AbbServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

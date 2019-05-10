import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbServicosComponent } from './abb-servicos.component';

describe('AbbServicosComponent', () => {
  let component: AbbServicosComponent;
  let fixture: ComponentFixture<AbbServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

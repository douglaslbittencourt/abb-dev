import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbMapaComponent } from './abb-mapa.component';

describe('AbbMapaComponent', () => {
  let component: AbbMapaComponent;
  let fixture: ComponentFixture<AbbMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

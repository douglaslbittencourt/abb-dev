import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbMissaoComponent } from './abb-missao.component';

describe('AbbMissaoComponent', () => {
  let component: AbbMissaoComponent;
  let fixture: ComponentFixture<AbbMissaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbMissaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbMissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

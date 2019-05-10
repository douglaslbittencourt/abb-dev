import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbParceirosComponent } from './abb-parceiros.component';

describe('AbbParceirosComponent', () => {
  let component: AbbParceirosComponent;
  let fixture: ComponentFixture<AbbParceirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbParceirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

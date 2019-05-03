import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbEquipeComponent } from './abb-equipe.component';

describe('AbbEquipeComponent', () => {
  let component: AbbEquipeComponent;
  let fixture: ComponentFixture<AbbEquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbEquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

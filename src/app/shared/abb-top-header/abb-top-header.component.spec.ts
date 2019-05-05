import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbTopHeaderComponent } from './abb-top-header.component';

describe('AbbTopHeaderComponent', () => {
  let component: AbbTopHeaderComponent;
  let fixture: ComponentFixture<AbbTopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbTopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

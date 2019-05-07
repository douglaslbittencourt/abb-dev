import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbInfoEmailComponent } from './abb-info-email.component';

describe('AbbInfoEmailComponent', () => {
  let component: AbbInfoEmailComponent;
  let fixture: ComponentFixture<AbbInfoEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbInfoEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbInfoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostItemEditComponent } from './lost-item-edit.component';

describe('LostItemEditComponent', () => {
  let component: LostItemEditComponent;
  let fixture: ComponentFixture<LostItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

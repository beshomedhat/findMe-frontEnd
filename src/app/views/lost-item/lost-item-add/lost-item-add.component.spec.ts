import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostItemAddComponent } from './lost-item-add.component';

describe('LostItemAddComponent', () => {
  let component: LostItemAddComponent;
  let fixture: ComponentFixture<LostItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostItemShowComponent } from './lost-item-show.component';

describe('LostItemShowComponent', () => {
  let component: LostItemShowComponent;
  let fixture: ComponentFixture<LostItemShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostItemShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostItemShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

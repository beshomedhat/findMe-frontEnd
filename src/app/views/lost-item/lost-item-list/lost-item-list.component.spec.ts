import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostItemListComponent } from './lost-item-list.component';

describe('LostItemListComponent', () => {
  let component: LostItemListComponent;
  let fixture: ComponentFixture<LostItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

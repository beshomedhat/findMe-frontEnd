import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundItemEditComponent } from './found-item-edit.component';

describe('FoundItemEditComponent', () => {
  let component: FoundItemEditComponent;
  let fixture: ComponentFixture<FoundItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

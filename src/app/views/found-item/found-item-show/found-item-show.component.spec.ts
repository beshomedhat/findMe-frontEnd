import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundItemShowComponent } from './found-item-show.component';

describe('FoundItemShowComponent', () => {
  let component: FoundItemShowComponent;
  let fixture: ComponentFixture<FoundItemShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundItemShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundItemShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

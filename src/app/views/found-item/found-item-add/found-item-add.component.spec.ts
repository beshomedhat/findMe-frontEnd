import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundItemAddComponent } from './found-item-add.component';

describe('FoundItemAddComponent', () => {
  let component: FoundItemAddComponent;
  let fixture: ComponentFixture<FoundItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

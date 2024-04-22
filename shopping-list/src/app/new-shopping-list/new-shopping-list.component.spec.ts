import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShoppingListComponent } from './new-shopping-list.component';

describe('NewShoppingListComponent', () => {
  let component: NewShoppingListComponent;
  let fixture: ComponentFixture<NewShoppingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewShoppingListComponent],
    });
    fixture = TestBed.createComponent(NewShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NewShoppingListComponent } from './new-shopping-list.component';

describe('NewShoppingListComponent', () => {
  let component: NewShoppingListComponent;
  let fixture: ComponentFixture<NewShoppingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewShoppingListComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(NewShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form correctly', () => {
    expect(component.shoppingListForm).toBeDefined();
  });

  it('should add item to items array on blur', () => {
    component.shoppingListForm.get('item')?.setValue('Test Item');
    component.addNewItem();
    expect(component.items.length).toBe(1);
  });

  it('should remove item from items array', () => {
    component.items = [{ name: 'Test Item', checked: false }];
    component.removeItem(0);
    expect(component.items.length).toBe(0);
  });

  it('should check checkbox value', () => {
    const item = { name: 'Test Item', checked: false };
    const fakeEvent = { target: { checked: true } } as unknown as Event;
    component.checkCheckboxValue(fakeEvent, item);
    expect(item.checked).toBe(true);
  });

  it('should reset form and items array', () => {
    component.items = [{ name: 'Test Item', checked: false }];
    component.shoppingListForm.get('title')?.setValue('Test Title');
    component.resetShoppingList();
    expect(component.items.length).toBe(0);
    expect(component.shoppingListForm.get('title')?.value).toBe('');
  });

  it('should set error message when title is not provided on submit', () => {
    component.saveShoppingList();
    expect(component.errorMessage).toBe(
      'Please add a title to the shopping list!'
    );
  });
});

import { TestBed } from '@angular/core/testing';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListProps } from 'src/types/types';

describe('ShoppingListService', () => {
  let service: ShoppingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListService);
  });

  it('should retrieve shopping lists from local storage', () => {
    localStorage.setItem('shoppingLists', JSON.stringify(['List 1', 'List 2']));
    const lists = service.getShoppingLists();
    expect(lists.length).toBe(2);
  });

  it('should return an empty array if there are no saved lists', () => {
    localStorage.removeItem('shoppingLists');
    const lists = service.getShoppingLists();
    expect(lists.length).toBe(0);
  });

  it('should add a new list to local storage', () => {
    const newList: ShoppingListProps = { title: 'New List', items: [] };
    service.addShoppingList(newList);
    const lists = JSON.parse(localStorage.getItem('shoppingLists') || '[]');
    expect(lists).toContain(newList);
  });

  it('should remove a list from local storage', () => {
    localStorage.setItem(
      'shoppingLists',
      JSON.stringify(['List 1', 'List 2', 'List 3'])
    );
    service.removeShoppingList(1);
    const lists = JSON.parse(localStorage.getItem('shoppingLists') || '[]');
    expect(lists).toEqual(['List 1', 'List 3']);
  });

  it('should update a shopping list in local storage', () => {
    const lists = [
      { title: 'List 1', items: [{ name: 'Item 1', checked: false }] },
      { title: 'List 2', items: [{ name: 'Item 2', checked: false }] },
    ];
    localStorage.setItem('shoppingLists', JSON.stringify(lists));

    const updatedList: ShoppingListProps = {
      title: 'Updated List',
      items: [{ name: 'Updated Item', checked: true }],
    };
    const indexToUpdate = 1;
    service.updateShoppingList(updatedList, indexToUpdate);
    const savedLists = JSON.parse(
      localStorage.getItem('shoppingLists') || '[]'
    ) as ShoppingListProps[];
    expect(savedLists[indexToUpdate]).toEqual(updatedList);
  });
});

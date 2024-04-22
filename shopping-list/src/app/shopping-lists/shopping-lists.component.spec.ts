import { TestBed } from '@angular/core/testing';
import { ShoppingListsComponent } from './shopping-lists.component';
import { ShoppingListService } from '../service/shopping-list.service';
import { ShoppingListProps } from 'src/types/types';

describe('ShoppingListsComponent', () => {
  let component: ShoppingListsComponent;
  let service: ShoppingListService;
  let lists: ShoppingListProps[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingListService],
    });
    service = TestBed.inject(ShoppingListService);
    lists = [
      { title: 'List1', items: [{ name: 'items 1', checked: false }] },
      { title: 'List2', items: [{ name: 'items 2', checked: false }] },
    ];
    component = new ShoppingListsComponent(service);
  });

  it('should fetch shopping lists from the shopping service', () => {
    spyOn(service, 'getShoppingLists').and.returnValue(lists);
    component.fetchShoppingLists();
    expect(component.shoppingLists.length).toBe(2);
  });

  it('should remove list from service and update shopping lists', () => {
    spyOn(service, 'removeShoppingList').and.callThrough();
    spyOn(service, 'getShoppingLists').and.returnValue(lists);
    component.removeList(1);
    expect(service.removeShoppingList).toHaveBeenCalledWith(1);
    expect(lists).toEqual([
      { title: 'List1', items: [{ name: 'items 1', checked: false }] },
    ]);
  });

  it("should remove list's item from service and update shopping lists", () => {
    spyOn(service, 'removeItemFromList').and.callThrough();
    spyOn(service, 'getShoppingLists').and.returnValue(lists);
    component.removeItem(1, 0);
    expect(service.removeItemFromList).toHaveBeenCalledWith(1, 0);
    expect(lists).toEqual([
      { title: 'List1', items: [{ name: 'items 1', checked: false }] },
      { title: 'List2', items: [] },
    ]);
  });

  it('should fetch shopping lists after list added', () => {
    const addedList = {
      title: 'List3',
      items: [{ name: 'items 3', checked: false }],
    };
    spyOn(service, 'getShoppingLists').and.returnValue(lists);
    service.addShoppingList(addedList);
    component.onListAdded();
    expect(component.shoppingLists.length).toBe(3);
  });

  it('should toggle showNewList', () => {
    const showNewList = component.showNewList;
    component.toggleNewList();
    expect(component.showNewList).toBe(!showNewList);
  });
});

import { Injectable } from '@angular/core';
import { ShoppingListProps } from 'src/types/types';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor() {}
  // get shopping lists
  getShoppingLists() {
    const savedLists = localStorage.getItem('shoppingLists');
    return savedLists ? JSON.parse(savedLists) : [];
  }
  // save shopping list in local storage
  addShoppingList(list: ShoppingListProps) {
    const savedLists = this.getShoppingLists();
    savedLists.push(list);
    localStorage.setItem('shoppingLists', JSON.stringify(savedLists));
  }
  // remove selected item from a list
  removeItemFromList(listIndex: number, itemIndex: number) {
    const savedLists = this.getShoppingLists();
    const items = savedLists[listIndex].items;
    items.splice(itemIndex, 1);
    localStorage.setItem('shoppingLists', JSON.stringify(savedLists));
  }
  // remove a list from local storage
  removeShoppingList(index: number) {
    const savedLists = this.getShoppingLists();
    savedLists.splice(index, 1);
    localStorage.setItem('shoppingLists', JSON.stringify(savedLists));
  }
  // update items in shopping list
  updateShoppingList(updatedList: ShoppingListProps, index: number) {
    const savedLists = this.getShoppingLists();
    savedLists[index] = updatedList;
    localStorage.setItem('shoppingLists', JSON.stringify(savedLists));
  }
}

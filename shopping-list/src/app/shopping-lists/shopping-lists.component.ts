import { Component } from '@angular/core';
import { ItemProps, ShoppingListProps } from 'src/types/types';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css'],
})
export class ShoppingListsComponent {
  shoppingLists: ShoppingListProps[] = [];
  showNewList = false;

  constructor(private shoppingListService: ShoppingListService) {
    this.fetchShoppingLists();
  }
  // fetch shopping lists from local storage
  fetchShoppingLists() {
    this.shoppingLists = this.shoppingListService.getShoppingLists();
  }
  // remove a list
  removeList(index: number) {
    this.shoppingListService.removeShoppingList(index);
    this.fetchShoppingLists();
  }

  // remove item from a list
  removeItem(listIndex: number, itemIndex: number) {
    this.shoppingListService.removeItemFromList(listIndex, itemIndex);
    this.fetchShoppingLists();
  }

  // refresh shopping lists when a new list added
  onListAdded() {
    this.fetchShoppingLists();
  }
  // open new list modal
  toggleNewList() {
    this.showNewList = !this.showNewList;
  }
  // update item in shopping list
  checkCheckboxValue(
    event: Event,
    item: ItemProps,
    listIndex: number,
    itemIndex: number
  ) {
    if (this.shoppingLists[listIndex]) {
      item.checked = (event.target as HTMLInputElement).checked;
      this.shoppingLists[listIndex].items[itemIndex] = item;
      this.shoppingListService.updateShoppingList(
        this.shoppingLists[listIndex],
        listIndex
      );
    }
  }
}

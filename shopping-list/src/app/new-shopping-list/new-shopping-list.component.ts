import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from '../service/shopping-list.service';
import { ItemProps, ShoppingListProps } from 'src/types/types';

@Component({
  selector: 'app-new-shopping-list',
  templateUrl: './new-shopping-list.component.html',
  styleUrls: ['./new-shopping-list.component.css'],
})
export class NewShoppingListComponent implements OnInit {
  shoppingList: ShoppingListProps[] = [];
  shoppingListForm!: FormGroup;
  items: ItemProps[] = [];
  errorMessage = '';

  @Output() listAdded = new EventEmitter<void>();
  @Output() toggleNewList = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.shoppingListForm = this.formBuilder.group({
      title: ['', Validators.required],
      item: ['', Validators.required],
    });
  }
  // add item on blur
  addNewItem() {
    if (this.shoppingListForm.get('item')?.valid) {
      this.items.push({
        name: this.shoppingListForm.value.item,
        checked: false,
      });
      this.shoppingListForm.get('item')?.reset();
    }
  }
  // cross/uncross out item
  checkCheckboxValue(event: Event, item: ItemProps) {
    item.checked = (event.target as HTMLInputElement).checked;
  }
  // remove item from new list
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
  // save new shopping list in local storage
  saveShoppingList() {
    if (this.shoppingListForm.get('title')?.valid) {
      const newList = {
        title: this.shoppingListForm.value.title,
        items: this.items,
      };

      this.shoppingListService.addShoppingList(newList);
      this.errorMessage = '';
      this.resetShoppingList();
      this.listAdded.emit();
    } else {
      this.errorMessage = 'Please add a title to the shopping list!';
    }
  }
  // close new shopping list modal
  closeNewList() {
    this.toggleNewList.emit();
  }
  // reset new shopping list fields
  resetShoppingList() {
    this.items = [];
    this.shoppingListForm.get('title')?.setValue('');
  }
}

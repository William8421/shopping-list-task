import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { NewShoppingListComponent } from './new-shopping-list/new-shopping-list.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ShoppingListsComponent,
        NewShoppingListComponent,
      ],
      imports: [],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shopping-list'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shopping-list');
  });
});

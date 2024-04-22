export interface ItemProps {
  name: string;
  checked: boolean;
}
export interface ShoppingListProps {
  title: string;
  items: ItemProps[];
}

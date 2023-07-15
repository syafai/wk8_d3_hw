import { v4 as uuidv4} from 'uuid'

class Item {
  id: string;
  itemName: string;
  price: number;
  descr: string;

  constructor(id: string, itemName: string, price: number, descr: string) {
    this.id = id;
    this.itemName = itemName;
    this.price = price;
    this.descr = descr;
  }
}

class User {
  id: string;
  name: string;
  age: number;
  cart: Item[];

  constructor(id: string, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.cart = [];
  }
}

function createUser(id: string, name: string, age: number): User {
  return new User(id, name, age);
}

function createItem(id: string, itemName: string, price: number, descr: string): Item {
  return new Item(id, itemName, price, descr);
}

function addToCart(item: Item, user: User): void {
  user.cart.push(item);
}

function removeFromCart(item: Item, user: User): void {
  user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}

function removeQuantityFromCart(item: Item, quantity: number, user: User): void {
  let count = 0;
  user.cart = user.cart.filter((cartItem) => {
    if (cartItem.id === item.id) {
      count++;
      return count > quantity;
    }
    return true;
  });
}

function cartTotal(user: User): number {
  let total = 0;
  for (const item of user.cart) {
    total += item.price;
  }
  return total;
}

function printCart(user: User): void {
  console.log("User's Cart:");
  for (const item of user.cart) {
    console.log(`- ${item.itemName} - $${item.price}`);
  }
}


const user = createUser(uuidv4(), "Saraa Yafai", 25);
console.log('Name: ' + user.name)
console.log('ID: ' + user.id)
console.log("Age: " + user.age)

const itemA = createItem(uuidv4(), "Milk", 10, "Lactade Milk");
const itemB = createItem(uuidv4(), "Rice", 15, "Basmati Rice");
const itemC = createItem(uuidv4(), "Carrots", 20, "Vegetables");

addToCart(itemA, user);

console.log("User's cart after adding Item A:");
printCart(user);

console.log("Total price of user's cart:", cartTotal(user));

addToCart(itemB, user);
addToCart(itemC, user);
addToCart(itemA, user);

console.log("User's cart after adding Item B, Item C, and 2nd Item A:");
printCart(user);

console.log("Total price of user's cart:", cartTotal(user));

removeFromCart(itemA, user);

console.log("User's cart after removing Item A:");
printCart(user);

console.log("Total price of user's cart:", cartTotal(user));

removeQuantityFromCart(itemC, 2, user);

console.log("User's cart after removing 2 instances of Item C:");
printCart(user);

console.log("Total price of user's cart:", cartTotal(user));

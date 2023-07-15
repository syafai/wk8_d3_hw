"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(id, itemName, price, descr) {
        this.id = id;
        this.itemName = itemName;
        this.price = price;
        this.descr = descr;
    }
}
class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.cart = [];
    }
}
function createUser(id, name, age) {
    return new User(id, name, age);
}
function createItem(id, itemName, price, descr) {
    return new Item(id, itemName, price, descr);
}
function addToCart(item, user) {
    user.cart.push(item);
}
function removeFromCart(item, user) {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}
function removeQuantityFromCart(item, quantity, user) {
    let count = 0;
    user.cart = user.cart.filter((cartItem) => {
        if (cartItem.id === item.id) {
            count++;
            return count > quantity;
        }
        return true;
    });
}
function cartTotal(user) {
    let total = 0;
    for (const item of user.cart) {
        total += item.price;
    }
    return total;
}
function printCart(user) {
    console.log("User's Cart:");
    for (const item of user.cart) {
        console.log(`- ${item.itemName} - $${item.price}`);
    }
}
// function getItemById(itemId: string): Item | undefined {
//   const items: Item[] = [
//     new Item("id1", "Milk", 10, "Lactade Milk"),
//     new Item("id2", "Rice", 15, "Basmati Rice"),
//     new Item("id3", "Carrots", 20, "Vegetables"),
//   ];
//   return items.find((item) => item.id === itemId);
// }
const user = createUser((0, uuid_1.v4)(), "Saraa Yafai", 25);
console.log('Name: ' + user.name);
console.log('ID: ' + user.id);
console.log("Age: " + user.age);
const itemA = createItem((0, uuid_1.v4)(), "Milk", 10, "Lactade Milk");
const itemB = createItem((0, uuid_1.v4)(), "Rice", 15, "Basmati Rice");
const itemC = createItem((0, uuid_1.v4)(), "Carrots", 20, "Vegetables");
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

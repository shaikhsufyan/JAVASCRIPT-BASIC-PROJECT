// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'


let shoppingCart=  ['Milk', 'Coffee', 'Tea', 'Honey'];
// Add element in begining
let add=shoppingCart.unshift("Meat");
console.log(shoppingCart);

// bydefault add element in array at last "push()"
 shoppingCart.push("Sugar");
 console.log(shoppingCart);

// pop() method remove last element of array shift() method remove first element of array. splice() method remove any element array with giving index number

 shoppingCart.splice(4,2)
 console.log(shoppingCart);

 shoppingCart[3]="Green Tea";
 console.log(shoppingCart);
 
  
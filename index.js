var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100 + 1);
 cart.push({"itemName": item, "itemPrice": price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var temp = "";

  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }

  for(var i = 0; i < cart.length; i++) {
    if(i === 0) {
      temp = `In your cart, you have ${cart[i].itemName} at ${cart[i].itemPrice}`;
    } else if (i === cart.length - 1) {
      temp = temp + `, and ${cart[i].itemName} at ${cart[i].itemPrice}`
    } else {
      temp = temp + `, ${cart[i].itemName} at ${cart[i].itemPrice}`
    }
  }
  return temp + "."
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

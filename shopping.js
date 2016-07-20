var cart;
cart = [];

function setCart(newCart) {
  cart = newCart;
}
function getCart() {
  return cart;
}
function addToCart(item) {
  var price;
  price = Math.floor(Math.random() * 101);
  var list_item;
  list_item = {[item]: price};
  cart.push(list_item);

  console.log(`${item} has been added to your cart.`);

  return cart;
}


function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  var item_list = [];
  for (var i = 0; i < cart.length; i++) {
    var current_item = cart[i];
    var item = Object.keys(current_item)[0];
    var price = current_item[item];
    item_list.push(` ${item} at $${price}`);
  }
  console.log(`In your cart, you have${item_list}.`);
}
function removeFromCart(item) {
  let item_status = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      item_status = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      item_status = true;
    }

  }
  if (!item_status) {
    console.log(`That item is not in your cart.`)
  }
  return cart;

}

function placeOrder(creditCard) {
  if (!creditCard) {
    return console.log('We don\'t have a credit card on file for you to place your order.');
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
  cart = [];
  return cart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


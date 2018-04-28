var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.round(Math.random()*100)
  var obj_item = {
    itemName: item,
    itemPrice: price
  }
  cart.push(obj_item)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }
  var string = `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  for (var i = 1; i < cart.length - 1; i++) {
    string += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
  }
  string += `, and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
  return `In your cart, you have ${string}.`
}

function total() {
  var totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice
  }
  return totalCost
}

function removeFromCart(item) {
  var found_item = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      found_item = true
      cart.splice(i, 1)
    }
  }
  if (!found_item) {
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  var output = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return output
}

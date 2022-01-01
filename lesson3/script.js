// Задание 1

var i = 0; 
while (i <= 100)  {
  document.write(i + "<br />"); 
  i = i + 1; 
}


// Задание 2

var basket = [
  {
    product: "pen",
    price: getNumber(50, 100)
  },
  {
    product: "pencil",
    price: getNumber(50, 100)
  },
  {
    product: "file",
    price: getNumber(50, 100)
  },
  {
    product: "paper",
    price: getNumber(50, 100)
  }
];
var basketPrice = 0;
for (var prod of basket) {
  basketPrice += prod.price;
  console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice + "руб");

// Задание 3

function countBasketPrice(basket) {
  var funBasketPrice = 0;
  for (var prod of basket) {
    funBasketPrice += prod.price;
  }
  return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + "руб");

// Задание 4

for (var i = 0; i < 10; console.log(i++)) { }

// Задание 5

var row = 'x';
for (var i = 0; i < 20; i++) {
  console.log(row);
  row += 'x';
}
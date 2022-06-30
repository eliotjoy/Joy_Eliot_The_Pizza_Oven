function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("gluten free", "olive oil", ["mozzarella", "provalone"], ["mushrooms", "basil", "chicken"]);
var p4 = pizzaOven("hand tossed", "traditional", ["cashew cheese"], ["chickpeas", "broccoli"]);

function randomPizza(){
    var random = [p1, p2, p3, p4];
    var num = Math.floor(Math.random() * 3);
    console.log(num);
    console.log(random[num]);
}

randomPizza();

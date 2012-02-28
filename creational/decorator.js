//Decorating allows us to 'wrap' a class a runtime and extend various parts of the wrapped class
//with new functionality - essentially 'decorating' them. Decorators are nice, because it allows us to change behavior of an instance
//at runtime.

//To start, we need a 'decorator' class that wraps the original class.

// Class to be decorated
function Coffee() {
    this.cost = function() {
        return 1;
    };
}
 
// Decorator A
function Milk(coffee) {
    this.cost = function() {
        return coffee.cost() + 0.5;
    };
}
 
// Decorator B
function Whip(coffee) {
    this.cost = function() {
        return coffee.cost() + 0.7;
    };
}
 
// Decorator C
function Sprinkles(coffee) {
    this.cost = function() {
        return coffee.cost() + 0.2;
    };
}
 
// Here's one way of using it
var coffee = new Milk(new Whip(new Sprinkles(new Coffee())));
alert( coffee.cost() );
 
// Here's another
var coffee = new Coffee();
coffee = new Sprinkles(coffee);
coffee = new Whip(coffee);
coffee = new Milk(coffee);
alert(coffee.cost());

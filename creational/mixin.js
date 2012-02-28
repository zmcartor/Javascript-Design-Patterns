var big_button = function(radius, label, action) {
    this.radius = radius;
    this.label = label;
    this.action = action;
};

var my_mixin = function(){
	if(this.hasOwnProperty('explosion')){
	throw "Namespace explosions already exists on this object!";
	}

	this.explosion = {
		boom: function(){ console.log('boo!!'); },
		explode: function(){ console.log('BIG kaboommm!'); }
		}
	}

big_red_button = new big_button;
//mixin this stuff!
//call my_mixin function with the 'this' object set to big_red_button.prototype.
//this now creates an 'explosion' namespace on big_button.
my_mixin.call(big_red_button);

//scheme for using this pattern:
// [mixin].call([object to apply mixin to].prototype)

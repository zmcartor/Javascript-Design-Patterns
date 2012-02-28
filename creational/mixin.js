var big_button = function(radius, label, action) {
    this.radius = radius;
    this.label = label;
    this.action = action;
};

var my_mixin = function(){
	if(this.hasOwnProperty('explosions')){
	throw "Namespace explosions already exists on this object!";
	}

	this.explosion = {
		boom: function(){ console.log('ballz!!!'); },
		explode: function(){ console.log('kaboommm!'); }
		}
	}

//mixin this stuff!
//call my_mixin function with the 'this' object set to big_button.prototype.
//this now creates an 'explosion' namespace on big_button.
my_mixin.call(big_button.prototype);

//scheme for using this pattern:
// [mixin].call([object to apply mixin to].prototype)

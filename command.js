//command pattern encapsulates a function call, or action into a discrete package.
//This 'command' allows operations to be placed into a queue, or saved for a later time.

engine = {
		
	//the command pattern can be used to create a 'status' bar.
	//create a hash and keep a list of the estimates for each operation.
	//this allows us to create an estimate of how long the current
	//queue of work will take with this engine.
		time_estimates : {
			grind: 10,
			slice: 5,
			combine: 20
		},

		grind: function(args){
			console.log('Grinding up!');
		},

		slice: function(args){
			console.log('Slicing up!');
		},

		combine: function(args){
			console.log('combining in the mixer!');
		},

		//this function processes various 'commands'
		process: function(command){
			//we make sure this engine can do the specified command.
			//raise an error if not supported.
			if(! engine.hasOwnProperty(command.command)){
				throw "This engine does not support the command "+command.command;
			}
			//the command object contains the name of the operation,
			//and the arguments to the operation.
			var func = command.command;
			var args = command.args;
		
			return engine[func](args);
		}
};


//quick little function to demonstrate how the engine.time_estimates can be used to
//supplement a status bar.
function estimate(queue){
	var total = 0;
	for(task in queue){
		//add up how long all the tasks will take using
		//engine.time_estimates
		var task_name = queue[task].command
		total += engine.time_estimates[task_name];
	}
	console.log("That should take %i minutes" , total);
}

var task1 = {command:'slice' , args:['hamburger']};
var task2 = {command:'grind' , args:['gravel'] };
var task3 = {command:'combine' , args:['beef' , 'chicken']};

var work_queue = [task1, task2, task3];

//show the estimate
estimate(work_queue);

//run through our work_queue and process each command.
for(task in work_queue){
	engine.process(work_queue[task]);
}

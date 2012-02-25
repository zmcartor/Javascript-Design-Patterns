//Example of the 'revealing module pattern'
missle_module = (function(){
				launched = false;
				launch_code = "ABC123";
				
				function launch(){
					console.log('launching missles..');
					engage_launch(launch_code);
				};

				function engage_launch(code){
					//..make phone call to launch missles..
					launched = true;
					console.log('MISSLES LAUNCHED!');
				};

				//here we reveal what we want to make public by returning an object literal
				//with pointers to the closure variables we want to expose.
				//notice that not everything is exposed. This allows 'private' variables 
				//and functions which are only accessible within the closure.

				return{
				 have_we_launched:function(){
					 return launched;
				 },

				 launch_missles: launch
				}
})();

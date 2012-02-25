//How is a singleton different from just a global obj?
//Singletons are JS objects with functions and properties instead of just values.
//That is more powerful then just a static value.

var singleton = (function(){
	var created;

	function create(){
		//structure to return
		return{
		something_public: function(){
			console.log('Hi there');
			return 42;
		},
		public_config_options:{instance: 'dev', public_key: 'AAAAZZZZHHHH123'}
		}
};

	//we can access private variable "created"
	//within this closure. If singleton has been instantiated,
	//return that instance. if not, create one by calling private
	return{
		instance: function(){
			if(created){
				return created;
			}
			created = create();
			return created;
		}
	};
})();

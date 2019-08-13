
var spinner = (function(){

	var counter = 0;

	function up(){
		return ++counter;
	}

	function down(){
		return --counter;
	}

	var result = {};

	Object.defineProperties({
		'up' : {
			value : up,
			writable : false
		},
		'down' : {
			value : down,
			writable : false
		}
	});

	return result;
})();


function spinnerFactory(){

	var counter = 0;

	function up(){
		return ++counter;
	}

	function down(){
		return --counter;
	}

	return {
		up : up,
		down : down
	}
}



var spinner = (function(){
	var counterl;

	function spinner(){
		return counter;
	}

	spinner.up = function(){
		++counter;
	};

	spinner.down = function(){
		--counter;
	}

	return spinner;
})();
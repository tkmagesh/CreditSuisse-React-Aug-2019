function Spinner(){

	var counter = 0;

	this.up = function(){
		return ++counter;
	}

	this.down = function(){
		return --counter;
	}

	
}
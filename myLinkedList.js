function List(){
	this.start = null;
	this.end = null;
}

List.prototype = {

	makeNode : function(){
		return {data: null, next: null}
	},

	addAtEnd : function(data){
		if(this.start === null){
			this.start = this.makeNode();
			this.end = this.start;
		} else{
			this.end.next = makeNode();
			this.end = this.end.next;
		}
	},

	print : function(){
		var listString = "Head ==> ";
		var current = this.start;
		while(current !== null){
			listString += current.data + ">";
			current = current.next;
		}
		console.log(listString + "tail");
	},

	
}
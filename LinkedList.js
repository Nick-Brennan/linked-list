/* Linked List */
function List() {
    this.start = null;
    this.end = null;
}

/*  List methods */
List.prototype = {
    /*
        Method: makeNode
        Make a simple Node object
    */
    makeNode : function() {
        return {data: null, next: null};
    },

    /*
        Method: addAtEnd
        Adds a Node to the END of the List
    */
    addAtEnd: function(data) {
        // if linkedList is empty
        if(this.start === null) {
            // start becomes a node
            this.start = this.makeNode();
            // end becomes the start node
            this.end = this.start;

            // else linkedList isn't empty
        } else {
            // create a next property for end and assign it a new Node
            this.end.next = this.makeNode();
            // move the end node to end's next node
            this.end = this.end.next;
        }
        // finally, add the data to the end Node
        this.end.data = data;
    },

    /*
        Method: print
        Traverse the list. For each node, append thte current node's data to
        a master list of all data, including head and tail
    */
    print: function() {
        var listString = 'Head -> ';
        // set our 'current' Node to the starting node
        var current = this.start;
        // while the 'current' Node isn't null
        while(current !== null) {
            // print out the 'current' Node's data
            listString += current.data + ' -> ';
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        console.log(listString +'Tail');
    },

    /*
        Method: insertAtHead
        Insert a new Node at the head of the list.
    */
    insertAtHead: function(data) {
        var newNode = this.makeNode();
        newNode.data = data;
        newNode.next = this.start;
        this.start = newNode;
    },

    /*
        Method: length
        Traverse the list. Return the amount of Nodes in the list.
    */
    length: function() {
        var count = 0;
        var current = this.start;
        while(current !== null){
            count += 1;
            current = current.next;
        }
        console.log(count);
    },

    /*
        Method: exists
        Traverse the list. If a Node with the data passed in exists, then return
        true. If not, return false
    */
    exists: function(data) {
        var current = this.start;
        while(current !== null){
            if(current.data === data){
                return true
            } else{
                current = current.next;
            }
        }

        return false;
    },

    /*
        Method: each
        Traverse the list. For each Node, call the function f on that Node.
        Example: f(current);
    */
    each: function(f) {
        var current = this.start;
        while(current !== null){
            f(current);
            current = current.next;
        }
    },

    /*
        Method: indexOf
        Traverse the list. If a Node with the data passed is found, return an
         index (integer) of that Node's location.
    */
    indexOf: function(data) {
        var current = this.start;
        var index = 0;
        if(current === null){
            return null;
        }
        while(current.next !== null){
            if(current.data === data){
                return index;
            }
            index++;
            current = current.next;
        }
    },

    /*
        Method: dataFrom
        Traverse the list to the ith position and return the corresponding data.
              */
    dataFrom: function(i) {
        var current = this.start;
        var index = 0;
        while(current !== null){
            if(index === i){
                return current.data;
            }
            index++;
            current = current.next;
        }
        return null;
    },

    /*
        Method: insertAt
        Traverse the List.  Find the ith Node in the list and insert a new Node
         after it.  You must preserve the list structure!
    */
    insertAt: function(i, data){
        var previousNode;
        var newNode = this.makeNode();
        newNode.data = data;
        var current = this.start;
        var index = 0;
        while(current !== null){
            if(index === i - 1){
                newNode.next = current.next;
                current.next = newNode;
                return "inserted";
            }
            index++;
            current = current.next;
        }
    },

    /*
        Method: delete
        Traverse the list, find the node with the corresponding data,
        and remove that node. List must still be fully intact after
        you remove the node!
    */
    delete: function(data) {
        var current1 = this.start;
        var current2 = this.start;
        var firstIndex = 0;
        var secondIndex = 0;
        var indexToDelete;
        var newNext;

        if(current1.data === data){
            this.start = current1.next; 
            return;
        }

        while(current1 !== null && !indexToDelete){
            if(current1.data === data){
                indexToDelete = firstIndex;
                newNext = current1.next;
            }
            firstIndex++;
            current1 = current1.next;
        }
        while(current2 !== null){
            if(secondIndex === indexToDelete - 1)
            {
                current2.next = newNext;
                return;
            }
            secondIndex++;
            current2 = current2.next;
        }
    }
}

function testCallback(obj){
    console.log(obj.data);
}

/* LinkedList initialization */
var LinkedList = new List();
var i = 2;
while(i <= 20) {
    LinkedList.addAtEnd(i);
    i+=2;
}

LinkedList.print();

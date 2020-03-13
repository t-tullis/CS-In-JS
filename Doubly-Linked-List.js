   //Creates Nodes
   class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//Creates a Doubly linked list
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}

let list = new DoublyLinkedList()

list.push(10)
list.push(20)

console.log(list)
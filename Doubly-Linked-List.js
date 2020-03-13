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
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } 
        this.length++
        return this
    }
    pop(){
        let previousTail = this.tail
        if(!this.head){
            return null
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = previousTail.prev;
            this.tail.next = null;
            previousTail.prev = null 
        }
        this.length--
        return previousTail
    }
    shift(){
        let previousHead = this.head;
        if(!this.head){
            return null
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = previousHead.next;
            this.head.prev = null;
            previousHead.next = null;
        }
        this.length--
        return previousHead;
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        let counter;
        let current;
        let half = Math.floor(this.length / 2)
        

        if(index < 0 || index > this.length){
            return null
        }
        if(index <= half){
            current = this.head;
            counter = 0;
            while(counter < index){
                current = current.next;
                counter ++
            }
        }
        if(index > half){
            current = this.tail;
            counter = this.length
            while(counter > index){
                current = current.prev;
                counter--
            }
        }
        return current;
    }
}

let list = new DoublyLinkedList()

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.push(60)
console.log(list.get(5))
// console.log(list.head)

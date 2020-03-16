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
            counter = this.length - 1
            while(counter > index){
                current = current.prev;
                counter--
            }
        }
        return current;
    }
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false;
    }
    insert(index,val){
        let newNode = new Node(val)
        let previousNode = this.get(index - 1)
        let nextNode = this.get(index)
        if(index < 0 || index > this.length){
            return null
        }
        if(index === this.length){
            return !!this.push(val)
        }
        if(index === 0){
            return !!this.unshift(val)
        }
        if(previousNode){
            previousNode.next = newNode;
            newNode.prev = previousNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
        }
        this.length++
    }
    remove(index){
        let removedNode = this.get(index)
        let previousNode = this.get(index - 1)
        let nextNode = removedNode.next;
        if(index === this.length - 1){
            return !!this.pop()
        }
        if(index === 0){
            return !!this.shift()
        }
        if(removedNode){
            previousNode.next = nextNode;
            nextNode.prev = previousNode;
            removedNode.prev = null;
            removedNode.next = null;
        }
        this.length--
        return removedNode
    }
}

let list = new DoublyLinkedList()

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
console.log(list.remove(2))
console.log(list.get(2))
console.log(list)

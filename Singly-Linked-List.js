    //Creates Nodes
    class Node{
        constructor(val){
            this.val = val
            this.next = null
        }
    }

    //Creates a linked list
    class SinglyLinkedList{
        constructor(){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

        push(val){
            let newNode = new Node(val)
            if(!this.head){
                this.head = newNode
                this.tail = this.head
            }else{
                this.tail.next = newNode
                this.tail = newNode
            }
            this.length++
            return this
        }
        pop(){
            if(!this.head){
                return undefined
            }
            //current and newTail is set to head node
            let current = this.head;
            let newTail = current
            //while current.next isn't null keep looping
            while(current.next != null){
                //set new tail to current
                newTail = current;
                //set current to next node in list
                current = current.next;
            }
            //set the tail = to the newTail
            this.tail = newTail;
            //set the tails next to null to reassign tail of list
            this.tail.next = null;
            //decrement the length of the list to show popped value was removed.
            this.length--
            //check to see if the length of the list is === 0 if so set the head and tail to null
            if(this.length === 0){
                this.head = null
                this.tail = null
            }
            return current
        }
        shift(){
            if(!this.head){
                return undefined
            }
            //set current variable to the head of the list
            let current = this.head;
            //then set the head of the list to current.next
            this.head = current.next;
            //decrement the length of the list by 1
            this.length--;
            //set the current.next value of the shifted item to null
            current.next = null;
            //check to see if the length of the list is equal to 0 if it is set the head and tail === to null
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return current
        }
        unshift(val){
            let newNode = new Node(val)
            if(!this.head){
                this.head = newNode;
                this.tail = this.head
            }else{
                let oldHead = this.head;
                this.head = newNode;
                newNode.next = oldHead
            }
            this.length++
            return this
        }
        get(index){
            let counter = 0;
            let current = this.head;
            while(counter < index){
                if(current.next === null){
                    return null
                }else{
                    current = current.next;
                    counter++
                }
            }
            return current
        }
        set(val, index){
            let findNode = this.get(index)
            if(findNode){
                findNode.val = val;
                return true
            }else{
                return false
            }
        }
    }

    let list = new SinglyLinkedList()

    list.push(10)
    list.push(20)
    list.push(30)
    list.push(40)
    console.log(list.set(15, 0))
    console.log(list.set(45, 3))
    console.log(list)
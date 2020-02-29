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
    }

    // let list = new SinglyLinkedList()

    // list.push(10)
    // list.push(20)
    // list.push(30)
    // console.log(list.pop())
    // console.log(list.pop())
    // console.log(list.pop())
    // console.log(list.pop())
    // console.log(list.pop())
    // list.push(5)
    // list.push(10)
    // console.log(list)
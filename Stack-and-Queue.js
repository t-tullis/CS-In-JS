class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// class Stack{
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     push(value){
//         let newNode = new Node(value)
//         //creates a new node if the size of the stack is 0
//         if(this.size === 0){
//             this.first = newNode;
//             this.last = this.first;
//         }else{
//             // VISUAL
//             /*
//             Starting stack:
//             [] <-- value 5
            
//             1st pass thru:
//             previous = [] <-- 5 
//             this.first = [] <-- 10
//             this.first.next = previous [] <-- 5

//             2nd pass thru:
//             previous = [] <-- 10
//             this.first = [] <-- 15
//             this.first.next = previous [] <-- 10

//             [] <-- 15`
//             [] <-- 10
//             [] <-- 5
//             */
           
//             //stores first node on the stack
//             let previous = this.first;
//             //sets the first node on the stack to a new node
//             this.first = newNode;
//             //set the next node to previous 
//             this.first.next = previous;
//         }
//         return ++this.size
//     }
//     pop(){
//         if(this.size === 0){
//             return null;
//         }
//         if(this.first === this.last){
//             this.last = null;
//         }
//             let poppedNode = this.first;
//             let previous = this.first.next;
//             this.first = previous;
//             poppedNode.next = null;
//             this.size --
//             return poppedNode
//     }
// }


// let s = new Stack();
// console.log(s.push(5))
// console.log(s.push(10))
// console.log(s.push(15))
// console.log(s.push(20))
// console.log(s.push(25))
// console.log(s.pop())
// console.log(s.pop())
// console.log(s.pop())
// console.log(s.pop())

// console.log(s)


class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode
        }else{
            // let next = this.first;
            // this.first.next = next
            this.last.next = newNode;
            this.last = newNode;
        }
        ++this.size
    }
}

let q = new Queue()

q.enqueue(10)
q.enqueue(15)
q.enqueue(20)
q.enqueue(25)

console.log(q.first)




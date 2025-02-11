// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null){

        this.data = data;
        this.next = next;

    }
}

class LinkedList {

    constructor(){

        this.head = null;
    }



 insertFirst(data){
    
        this.head = new Node(data, this.head );
    }

size(){
        // no of nodes
        let counter = 0;
        let node = this.head;

        while (node){

            counter++;
            node = node.next;
        }

        return counter;
    }

getFirst(){

        return this.head;

    }

getLast(){

        if(!this.head){
            return null;

        }

        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            }

            node = node.next;
        }
    }

        clear(){
            this.head = null;
        }


        removeFirst(){
            if(!this.head){
                return;
            }

            this.head = this.head.next;
        }

        removeLast(){
            if(!this.head){
                return;
            }

            if(!this.head.next){
                this.head = null;
                return;
            }

            let previous = this.head;
            let node = this.head.next;
            while(node.next){
                previous = node;
                node = node.next;
            }
            previous.next = null;
        }

        insertLast(data){
            let last = this.getLast();
            if(last){
                last.next = new Node(data);
            }else{
                this.head = new Node(data);
            }
        }

        getAt(index){
            if(!this.head){
                return null ;
            }

            let counter = 0;
            let node = this.head;

            while(node){
                if(counter === index){
                    return node;
                }

                counter++;
                node = node.next;
            }
        }

        removeAt(){
            if(!this.head){
                this.head = this.head.next;
                return;
            }

            let previous = this.getAt(index - 1);
            if(!previous || !previous.next){
                return;
            }
            previous.next = previous.next.next;
        }

        insertAt(data, index){
            if(!this.head){
                this.head = new Node(data, this.head);
                return;
            }

            const previous = this.getAt(index-1);
            const node = new Node(data, previous.next);
            previous.next = node;


        }
    }


const nodeOne = new Node(5);
const list = new LinkedList();

list.head = nodeOne;
list.insertFirst(15);

console.log(list);








module.exports = { Node, LinkedList };

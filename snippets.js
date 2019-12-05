
// cool static method to check distance bwtn two points.  
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// basic factorial recursive
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1)
}

factorial(5);

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// getting into data structures.  Singly linked lists, with a few methods.  
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //     traverse(){
    //         var current = this.head;
    //         while(current){
    //         console.log(current.val)
    //         current = current.next
    //         } 
    //     }
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        return oldHead;
    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else {
            let counter = 0;
            let current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current
        }
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length)

    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("Ouvua")
list.push("Dubois")



// functioning bubble sort method.  May not be the most efficient, but it can be modified for
// some certain cases

function bubSort(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;
}

bubSort([54, 23, 22, 45, 44])

// pure recursion
function collectOddValues(arr) {
    let newArray = [];

    if (arr.length === 0) {
        return newArray;
    }

    if (arr[0] % 2 !== 0) {
        newArray.push(arr[0]);
    }

    newArray = newArray.concat(collectOddValues(arr.slice(1)));
    return newArray;

}

collectOddValues([1, 2, 3, 4, 5])

//another recurion example
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

reverse("WeirD")

//and another 
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1)
}
sumRange(4);

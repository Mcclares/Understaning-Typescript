// const names: Array<string> = []; // string [6]
// names[0].split(' ');


// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });
// promise.then(data => {
//     data.split(' ');
// });



function merge<T extends object , U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
    
}



// const mergeObj = merge({ name: 'Max' }, { age: 30 }) as {name: string, age: number};
const mergeObj = merge({ name: 'Max' }, {age:30});
console.log(mergeObj.name);


interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let desciptionText = 'Got no value.';
    if (element.length === 1) {
        desciptionText = 'Got 1 elements';
    } else if (element.length > 1) {
        desciptionText = 'Got ' + element.length + ' elements';
    }
    return [element,desciptionText ]
}

console.log(countAndPrint(["sports", "cooking"]))

function extraAndConvert<T extends object, U extends keyof T >(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extraAndConvert({ name: 'Max' }, 'name'));

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];
    addItem(item:T) {
        this.data.push(item);

    } 
    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }


        this.data.splice(this.data.indexOf(item),1);
    }
    getItems() {
        return [...this.data];
    }

}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem("Max");
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();

// const maxObj = { name: 'Max' };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: 'Manul' });
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;

}
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial< CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;

}
const names: Readonly<string[]> = ['Max', 'Anna'];
const sergei: number | string = 5;
console.log(sergei);
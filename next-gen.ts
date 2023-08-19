// const add = (a:number, b:number = 1) => { 
//     return a + b;

// };
// console.log(add(2));
// const printOut: (a: number | string) => void = output => console.log(output);

const hobbies = ["sports", "reading","swimming"];
const activeHobbies = ["Hiking", ...hobbies];
activeHobbies.push(...hobbies);


const person = {
    fistName: "Max",
    age: 30
};
const copiedPerson = {
    ...person
};

// ... знак копирует полностью, а не ссылается на файл
const button = document.querySelector("button")!;
button.addEventListener('click', event => console.log(event));

// здесь знак ... показывает что есть непределенное значений параметров
//const add = (...numbers: number[]) =>
const add = (...numbers: number[]) => {
    
   return  numbers.reduce((curResult,curValue) => {
        return curResult + curValue;
    }, 0)


};
// Также необязательно создавать массив, достаточно просто написать в метод цифры или слова
const addedNumbers = add(5, 10, 11);
console.log(addedNumbers);
//destructing

const [hobby1, hobby2, ...remainingHobbies] = hobbies; // remainingHobbies - оставшиеся элементы
console.log(hobby1, hobby2, hobbies);
console.log(remainingHobbies[0]);

const { fistName: userName, age } = person; //name override
console.log(userName,age);
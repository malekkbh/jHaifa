// console.log("Code Zone")
// const year = 2016
// const age = 2026 - year
// console.log( "age: " ,  age);

// var a = "10"
// var b = "b"
// var ab = a+" "+b
// console.log(ab);

// for(var i = 0 ; i < 100000 ; i ++) {
//     console.log("Line: " , i);
// }

const students = [
    {
        name: "btata" , 
        class : "10-1", 
        avg : 34 , 
        address :"Tayebeh"
    },
    {
        name: "Bandora" , 
        class : "10-1", 
        avg : 50 , 
        address :"Tayebeh"
    }, {
        name: "faqos" , 
        class : "10-1", 
        avg : 88 , 
        address :"Der al-Asad"
    }, {
        name: "kbab" , 
        class : "11-1", 
        avg : 88 , 
        address :"Tayebeh"
    }, {
        name: "Pita" , 
        class : "12-1", 
        avg : 12 , 
        address :"Qalsweh"
    }, {
        name: "Burger" , 
        class : "11-1", 
        avg : 99 , 
        address :"Tayebeh"
    }, {
        name: "Shawerma" , 
        class : "10-1", 
        avg : 100 , 
        address :"Tayebeh"
    }, 
];
var sum = 0;

students.forEach(student => {
    sum = sum + student.avg
})

const Shatreen = students.filter(student => {
    return student.avg > 50 
})

console.log("Shatreen is: ", Shatreen.length , "/" , students.length);
console.log("shatreen: " , Shatreen);
console.log("shatreen: " , students);
 


const class_avg = sum / students.length

console.log("class avg: " ,class_avg.toFixed(2) );


console.log("sum: ", sum);

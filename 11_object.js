

/*let address = {
    street: "Wkad road",
    landmark: "Near Datta Mandir",
    city: "Pune",
    PIN: 431002,
    state: "MH",
    country: 'India'
}*/


let person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true,
    address: {
        street: "Wkad road",
        landmark: "Near Datta Mandir",
        city: "Pune",
        PIN: 431002,
        state: "MH",
        country: 'India'
    },
    childName: ["Nikhil", "Suraj", "Aniket", "Ravindra "],
    walk: function(totalWalk){
        console.log(`${this.name} Yes... I can walk ${totalWalk}`);
    },
    details: function(){
        console.log(`Personale details: Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    },
    getDetails: function(){
        let details = `Name: ${this.name}, Age: ${this.age}, Is Married: ${this.isMarried}, City: ${this.city}`;
        return details;
    }
}
console.log(`Type of person is: ${typeof person}`);

console.log(`---------Accessing objevt property-----------`);
//1. Dot Notation
const personName = person.name;
console.log(`Person name is: ${personName}`);
console.log(`Person city is: ${person.city}`);

console.log(`Person height is: ${person["height"]}`);

console.log(person);
// console.table(person);

console.log(`---------Updating objevt property-----------`);
person.city = "Mumbai";
person.isMarried = false;
console.log(`Person city is: ${person.city}`);
console.log(`Person is married: ${person.isMarried}`);

console.log(`---------Adding objevt property-----------`);
person.gender = "Male";
person.state = "MH";
console.log(person);
console.table(person);

console.log(`---------Deleting objevt property-----------`);
delete person.height;
// console.table(person);

console.log(`---------Invoking or calling object method-----------`);
person.walk();
person.details();
const details = person.getDetails();
console.log(`Details about person is: ${details}`);

console.log(`---------Accessing Nested objevt properties-----------`);
let personCountry = person.address.country;
console.log(`Person country is: ${personCountry}`);

console.log(`---------Updating Nested objevt properties-----------`);
let personPin = person.address.PIN = 556677;
console.log(`Person pin code is: ${personPin }`);

////////////////////////////////////////////////////////////////////////////

//Empty Object
console.log(`---------Creating empty object-----------`);
let student = {

    }

console.log(student);
student.marks = "99%";
console.log(student);

const isCityAvailable = "city" in student;
console.log(`Is city is available in student object: ${isCityAvailable}`);
console.log(`Is marks is available in student object: ${"marks" in student}`);
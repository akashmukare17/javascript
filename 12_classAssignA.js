

console.log(`*******************************    Vehicle Details    *************************************`);
class Vehicle {
    constructor(name, price, engine, mileage, torque){
        this.name = name;
        this.price = price;
        this.engine = engine;
        this.mileage = mileage;
        this.torque = torque;
    }
    showDetails(){
        console.log(``);
        console.log(`Name: ${this.name}, Price: ${this.price}, Engine: ${this.engine}, Mileage: ${this.mileage}, Torque: ${this.torque}`);
    }
}
const zx10R = new Vehicle("Ninja ZX-10R", "16.31 Lakh", "998CC", "12kmpl", "114.9 Nm");
const hayabusa = new Vehicle("Hayabusa", "16.90 Lakh", "1340 CC", "17 kmpl", "150 Nm");
const bmw = new Vehicle("BMW S1000RR", "24.45 Lakh", "999 CC", "15.62 kmpl", "113 Nm");
const ninja = new Vehicle("Ninja H2", "79.90 Lakh", "998CC", "13 kmpl", "141.7 Nm");
const ducati = new Vehicle("Ducati Panigale V4", "51 Lakh", "998CC", "12kmpl", "112 Nm");

const arrayOfVehicle = [zx10R, hayabusa, bmw, ninja, ducati]
for (const element of arrayOfVehicle) {
    element.showDetails();
}
console.log(`===========================================================================================`);

console.log(`******  College Information  *****`);
console.log(`----------------------------------`);
class College {
    constructor(name, location, courses, year){
        this.name = name;
        this.location = location;
        this.courses = courses;
        this.year = year;
    }
}

const clg1 = new College ("D Y Patil", "Pune", ["Mechanical", "Computer"], 1998);
const clg2 = new College ("Sihgad College", "Pandharpur", ["Civil", "IT"], 2002);
const clg3 = new College ("Bharti Vidyapith", "Kolhapur", ["ENTC", "Automobile"], 1990);
const clg4 = new College ("JSPM College", "Barshi", ["Computer", "Electrical"], 2004);

function traverseObject(clgName) {
    for (const key in clgName) {
        console.log(`${key}: ${clgName[key]}`);
    }
}
console.log("College 1:");
traverseObject(clg1);
console.log(`-----------------------------`);

console.log("College 2:");
traverseObject(clg2);
console.log(`-----------------------------`);

console.log("College 3:");
traverseObject(clg3);
console.log(`-----------------------------`);

console.log("College 4:");
traverseObject(clg4);
console.log(`-----------------------------`);
console.log(`===========================================================================================`);
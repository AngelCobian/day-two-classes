import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
// import { constants } from 'os';

class Greeting{
  message: string;

  constructor(message: string){
    this.message = message;
  }
  greet(){
    return "Hello, " + this.message;
  }

}
class Animal {
 name: string;

  constructor(animalName: string){
    this.name = animalName;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`)
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  bark(){
    console.log('woof!');

  }
  move(distanceMovedByDog: number = 5){
    console.log('dog is moving...')
    super.move(distanceMovedByDog);
  }

}

class Poodle extends Dog{
  constructor(name: string){
    super(name);
  }
  move(){
    let moving = super.move();
    console.log('poddle is walking...');
  }
}

class Horse extends Animal{
  constructor(name: string){
    super(name);
  }
  move(distanceMovedByHorse: number = 45){
  console.log('Horse is moving...');
  super.move(distanceMovedByHorse);
}}

class User {
  private name: string;
  constructor(name: string) {
  this.name = name;
  }
}

class John extends User {
  constructor() {
  super('John');
  }
}

class Employee {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Person {
  protected name: string;

  constructor(name: string) {
  this.name = name;
  }
}

class Worker extends Person{
  private department: string;
  constructor(name:string, department:string){
    super(name);
    this.department = department;
  }
    getDetails(){
      return `My name is ${this.name} and I work in ${this.department}.` ;
    }
  }

//Interface
interface Stuff{
  name: string;
  age: number;
  department?: string;

  foo?(s: string);
  // foo?(n: number);
}

class StuffTwo implements Stuff{
  name: string;
  age: number;

  foo(s: string){
    this.name = s;

  }
}
//end Interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // this.classTesting();
    // this.animalClassTesting();
    // this.classCompatibilityTesting();
  // this.extendDerivedClassTesting();
  // this.protectedTesting();
  this.interfaceTesting({ name: "xyz", age: 25});
  }

  classTesting() {
    const greeter = new Greeting('world!');
    console.log(greeter.greet());
  }


animalClassTesting(){
  const dog = new Dog("Goofy");
  dog.bark();
  dog.move();
  // dog.name();
  const horse = new Horse('hello');
  horse.move();
}

classCompatibilityTesting(){
let user = new User('Doe');
const john = new John();
console.log(user);
console.log(john);

const employee = new Employee('Smith');
console.log(employee);

user = john;
console.log(user);
}

extendDerivedClassTesting(){
  const poddle = new Poodle('Tom')
  poddle.move();
}

protectedTesting(){
  const worker = new Worker("steve", "sales");
  console.log(worker.getDetails());

  // const person = new Person("Patrick");
  // console.log(person)
}
//end class testing
//interface testing
interfaceTesting(x: Stuff){
  console.log(`${x.name} is ${x.age} years old and works on ${x.department}.`)
  // x.foo(5);
  const stuff = new StuffTwo();
  stuff.foo('test');
  console.log(stuff.name);
}
//end interface
}

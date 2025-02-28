import './style.css'
import {fakeApi} from "./fakeApi.js";

class Person {

    constructor(name, gender, salary, rating) {
        this.name = name;
        this.gender = gender;
        this.salary = salary;
        this.rating = rating;
    }

    sayHi() {
        alert(`Hi, ${this.name}`);
    }

}

document.querySelector('#app').innerHTML = `
<h1>Hello, !</h1>
<button id="button" type="button">Say Hi!</button>
`

document.querySelector('#button').onclick = () => user.sayHi();

let people = null

async function fetchPeople() {
    const response = await fakeApi();
    return response.map(person => new Person(person.name, person.gender, person.salary, person.rating));
}

fetchPeople().then((peopleData) => {
    console.log(peopleData); // Теперь точно будет массив Person
});
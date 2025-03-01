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

// document.querySelector('#app').innerHTML = `
// <h1>Hello, !</h1>
// <button id="button" type="button">Say Hi!</button>
// `
//
// document.querySelector('#button').onclick = () => user.sayHi();

let people = []

async function fetchPeople() {
    const response = await fakeApi();
    people = response.map(person => new Person(person.name, person.gender, person.salary, person.rating));
    renderTable(people);
}

fetchPeople();


function renderTable(people) {
    const tableBody = document.querySelector("#employeeTable tbody");

    people.forEach(person => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${person.name}</td>
            <td>${person.gender}</td>
            <td>${person.salary}</td>
            <td>${person.rating}</td>
            <td><button class="button-accent">Hire</button></td>
        `;
        tableBody.appendChild(row);
    })
}
import './style.css'
import {fakeApi} from "./fakeApi.js";

class Person {

    constructor(name, gender, salary, rating) {
        this.name = name;
        this.gender = gender;
        this.salary = salary;
        this.rating = rating;
        this.isBusy = false;
    }

    goToWork(duration, button) {
        this.isBusy = true;

        let remainingTime = duration / 1000;

        button.classList.add('button-disabled');
        button.textContent = `Going to work`;
        const interval = setInterval(() => {
            button.textContent = `Busy (${remainingTime}s)`;
            remainingTime--;

            if (remainingTime < 0) {
                clearInterval(interval);
                button.textContent = "Hire";
                button.classList.remove('button-disabled');
                this.isBusy = false;
            }
        }, 1000);
    }

}

let people = []

async function fetchPeople() {
    const response = await fakeApi();
    people = response.map(person => new Person(person.name, person.gender, person.salary, person.rating));
    renderTable(people);
}

fetchPeople();


function renderTable(people) {
    const tableBody = document.querySelector("#employeeTable tbody");
    tableBody.innerHTML = "";

    people.forEach(person => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><b>${person.name}</b></td>
            <td>${person.gender}</td>
            <td>$${person.salary}</td>
            <td>${person.rating}</td>
            <td><button class="hire-btn | button-accent">Hire</button></td>
        `;

        const hireButton = row.querySelector(".hire-btn");

        hireButton.addEventListener("click", () => {
            if (!person.isBusy) {
                const randomDuration = Math.floor(Math.random() * 25) * 1000 + 5000;
                person.goToWork(randomDuration, hireButton);
            }
        });

        tableBody.appendChild(row);
    })
}
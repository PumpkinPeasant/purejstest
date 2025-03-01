import './styles/style.css'
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
            <td>
                <div class="gender-cell">
                    <span class="material-symbols-outlined">${person.gender}</span>
                    ${person.gender}
                </div>
            </td>
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

function sortTable() {
    let sortOrder = null;
    let sortField = null;

    const tableHeaders = document.querySelectorAll(".thead-item__sort");

    tableHeaders.forEach(header => {
        header.addEventListener("click", (e) => {
            const sortContainer = e.target.closest(".thead-item__sort");
            if (!sortContainer) return;

            const field = sortContainer.getAttribute("aria-label");
            const currentOrder = sortContainer.getAttribute("aria-sort");

            sortOrder = (sortField === field && currentOrder === "descending") ? "ascending" : "descending";
            sortField = field;

            tableHeaders.forEach(h => h.setAttribute("aria-sort", 'none'));
            sortContainer.setAttribute("aria-sort", sortOrder);

            people.sort(byField(sortField, sortOrder));
            renderTable(people);
        });
    })

    function byField(fieldName, order) {
        order = order === 'descending' ? 1 : -1;
        return (a, b) => a[fieldName] > b[fieldName] ? 1 * order : -1 * order;
    }

}

sortTable();
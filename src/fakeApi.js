import './enums.js'
import {Genders, NameCategories, NamePool} from "./enums.js";

export function fakeApi() {

    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(createFakePerson(10))
        }, 250)
    })
}


function createFakePerson(amount) {

    let people = [];

    for (let i = 0; i < amount; i++) {
        let gender = Object.values(Genders)
            [Math.floor(Math.random() * Object.values(Genders).length)]
        let name = getAvailableNames()
        const salary = Math.floor(Math.random() * 5) * 100 + 300;
        const rating = Math.floor(Math.random() * 4) + 2;

        function getAvailableNames() {
            const availableCategories = Object.keys(NameCategories).filter(category =>
                NameCategories[category].includes(gender)
            );
            const availableNames =
                availableCategories.flatMap(category => NamePool[category]);
            return availableNames[Math.floor(Math.random() * availableNames.length)]
        }

        people.push({name, gender, salary, rating});
    }

    return people;
}
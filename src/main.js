import './style.css'
import javascriptLogo from './javascript.svg'

class Person {

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    sayHi() {
        alert(`Hi, ${this.name}`);
    }

}


const user = new Person('John');

const users = []




document.querySelector('#app').innerHTML = `
<h1>Hello, ${user.name}!</h1>
<button id="button" type="button">Say Hi!</button>
`

document.querySelector('#button').onclick = () => user.sayHi();



import { elementSelect as get } from "./elementSelection.js";
import { getUser } from "./fetchUser.js";

const URL = 'https://randomuser.me/api/';

const img = get('.user-img');
const title = get('.user-title')
const value = get('.user-value')
const btn = get('.btn');
const buttons = [...document.querySelectorAll('.icon')]


function displayUser(person) {
    img.src = person.image;
    value.textContent = person.fullName;
    title.textContent = 'My name is'
    buttons.forEach(button => {
        button.classList.remove('active')
    })
    buttons[0].classList.add('active')
    buttons.forEach(button => {
        const label = button.dataset.label
        button.addEventListener('click', () => {
            button.classList.remove('active')
            title.textContent = `My ${label} is`
            value.textContent = person[label];
            buttons.forEach(button => {
                button.classList.remove('active')
            })
            button.classList.add('active')
        })
    })

}

async function showUser() {
    const person = await getUser(URL);
    displayUser(person)
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
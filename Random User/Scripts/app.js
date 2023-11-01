import { elementSelect as get } from "./elementSelection.js";
import { getUser } from "./fetchUser.js";

const URL = 'https://randomuser.me/api/';

const img = get('.user-img');
const title = get('.user-title')
const value = get('.user-value')
const btn = get('.btn');
const buttons = [...document.querySelectorAll('.icon')]



async function showUser() {
    const person = await getUser(URL);
    console.log(person)
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
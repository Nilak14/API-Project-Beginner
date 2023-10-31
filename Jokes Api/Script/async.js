const { log } = require("async");

const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')
const URL = 'https://api.chucknorris.io/jokes/random';


btn.addEventListener('click', async () => {
    try {
        const data = await fetch(URL);
        const response = await data.json();
        const value = response.value;
        content.textContent = value
        img.classList.add('shake')
        setTimeout(() => {
            img.classList.remove('shake')
        }, 200);
    } catch (error) {
        console.log(error);
    }

})




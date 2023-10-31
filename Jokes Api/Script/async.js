

const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', async () => {
    try {
        const data = await fetch(URL);
        const response = await data.json();
        displayData(response)
    }
    catch (error) {
        content.innerText = error
    }

})


function displayData(data) {
    img.classList.add('shake')
    setInterval(() => {
        img.classList.remove('shake')
    }, 1000)
    const { value: joke } = data;
    content.innerText = joke;
}


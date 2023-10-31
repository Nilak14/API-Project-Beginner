const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')
const URL = 'https://api.chucknorris.io/jokes/random';


btn.addEventListener('click', () => {
    fetch(URL)
        .then(data => data.json())
        .then(response => {
            const value = response.value
            content.textContent = value
            setTimeout(() => {
                img.classList.remove('shake')
            }, 200);
        })
        .catch(err => console.log(err))
})



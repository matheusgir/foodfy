const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')

const recipe = document.querySelector('.modal-content')

for (let card of cards) {
    card.addEventListener('click', () => {

        modalOverlay.classList.add('active')
        recipe.innerHTML += `${card.innerHTML}`
        console.log(recipe)
    })
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    recipe.innerHTML = ''
})
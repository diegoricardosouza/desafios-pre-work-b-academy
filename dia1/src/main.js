const app = document.querySelector('[data-js="app"]')

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const button = document.querySelector('.button')

button.addEventListener('click', (event) => {
  event.preventDefault()

  app.classList.toggle('hide')

  if (button.innerHTML === 'Esconder') {
    button.innerHTML = "Mostrar"
  } else {
    button.innerHTML = "Esconder"
  }
})

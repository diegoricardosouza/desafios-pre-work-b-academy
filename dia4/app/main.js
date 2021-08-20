import './style.css'

const url = 'http://localhost:3333/cars';
const tabelaBody = document.querySelector('[data-js="tabelaBody"]')
const formCarro = document.querySelector('[data-js="formCarro"]')
const msg = document.querySelector('[data-js="msg"]')

getData()

function getData() {
  fetch(url).then((response) => {
    response.json().then((data) => {
      populaTable(data)

      const btDel = document.querySelectorAll('[data-js="del"]')
      delData(btDel)
    })
  })
}

function delData(btnArr) {
  btnArr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const plateD = e.target.getAttribute("data-plate")

      fetch(url, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ plate: plateD})
      }).then(() => {
        tabelaBody.innerHTML = ''
        getData()
      })
    })
  })
}

function populaTable(data) {
  if (data.length > 0) {
    data.forEach((input) => {
      const a = [input.image, input.brandModel, input.year, input.plate, input.color]

      createLines(a, input.plate)
    })
  } else {
    const td = document.createElement("td");
    td.textContent = "Nenhum carro encontrado"
    td.setAttribute('colspan', '5')
    tr.appendChild(td)
  }
}

function createNewTable(res) {
  msg.innerHTML = ''
  const div = document.createElement("div")
  div.textContent = res.message
  div.classList.add("success");
  msg.appendChild(div)

  fetch(url)
  .then(result => result.json())
  .then((result) => {
    tabelaBody.innerHTML = ''

    result.map((res) => {
      const a = [res.image, res.brandModel, res.year, res.plate, res.color]
      createLines(a, res.plate)
    })
  })
}

function insertData (data) {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
      res.json()
      .then((res) => {
        if(!!res.error) {
          msg.innerHTML = ''
          const div = document.createElement("div")
          div.textContent = res.message
          msg.appendChild(div)
        } else {
          createNewTable(res)
        }
      })
  })
}

function createLines(arr, plate) {
  const tr = document.createElement("tr")
  tabelaBody.appendChild(tr)

  arr.forEach((res) => {
    const td = document.createElement("td")

    td.textContent = res
    tr.appendChild(td)
  })

  const del = document.createElement("td")
  const buttonDel = document.createElement("button")
  buttonDel.textContent = 'Excluir'
  buttonDel.setAttribute('data-js', 'del')
  buttonDel.setAttribute('data-plate', plate)
  del.appendChild(buttonDel)
  tr.appendChild(del)
}



formCarro.addEventListener('submit', (e) => {
  e.preventDefault()

  const imagem = e.target.elements.img.value
  const marca = e.target.elements.marca.value
  const ano = e.target.elements.ano.value
  const placa = e.target.elements.placa.value
  const cor = e.target.elements.cor.value

  const data = {
    image: imagem,
    brandModel: marca,
    year: ano,
    plate: placa,
    color: cor
  }

  insertData(data)

  formCarro.reset()
  e.target.elements.img.focus()
})

const nome = document.querySelector('[data-js="tabela"]')
const formCarro = document.querySelector('[data-js="formCarro"]')
const tabelaBody = document.querySelector('[data-js="tabelaBody"]')

const createElementsTable = (e) => {
  const tr = document.createElement("tr")
  tabelaBody.appendChild(tr)

  e.map((input) => {
    let td = document.createElement("td");
    td.textContent = input
    tr.appendChild(td)
  })
}

formCarro.addEventListener('submit', (e) => {
  e.preventDefault()

  const imagem = e.target.elements.img.value
  const marca = e.target.elements.marca.value
  const modelo = e.target.elements.modelo.value
  const ano = e.target.elements.ano.value
  const placa = e.target.elements.placa.value
  const cor = e.target.elements.cor.value

  const arrInputs =  [imagem, marca, modelo, ano, placa, cor];

  createElementsTable(arrInputs)

  formCarro.reset();
  e.target.elements.img.focus()
})


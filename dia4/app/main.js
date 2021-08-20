import './style.css'

const url = 'http://localhost:3333/cars';
const tabelaBody = document.querySelector('[data-js="tabelaBody"]')

fetch(url).then(function(response) {
  response.json().then(function(data) {
    populaTable(data);
  });
})

function populaTable(data) {
  const tr = document.createElement("tr")
  tabelaBody.appendChild(tr)

  if (data.length > 0) {
    data.map((input) => {
      const td = document.createElement("td");
      td.textContent = input
      tr.appendChild(td)
    })
  } else {
    const td = document.createElement("td");
    td.textContent = "Nenhum carro encontrado"
    td.setAttribute('colspan', '5')
    tr.appendChild(td)
  }

}

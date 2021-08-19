const nome = document.querySelector('[data-js="nome"]')
const form = document.querySelector('[data-js="form"]')

function convertWords(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  ).replace('De', 'de')
    .replace('Da', 'da')
    .replace('Do', 'do')
    .replace('Dos', 'dos')
}

nome.addEventListener('input', (e) => {
  const field = e.target
  field.value = convertWords(e.target.value)
})

//exercicio 2

let sel = document.createElement("select");
sel.setAttribute('multiple', 'multiple')
sel.setAttribute('data-js', 'colors')

let optarr =  ['Blue','Green','Yellow','Black','Red'];
for(var i = 0;i<optarr.length;i++) {
  let opt = document.createElement("option");
  opt.text = optarr[i];
  opt.value = optarr[i].toLowerCase();
  opt.className = optarr[i];
  sel.appendChild(opt);
}

form.appendChild(sel);

const colors = document.querySelector('[data-js="colors"]')
const boxColors = document.createElement("div");
boxColors.setAttribute('data-js', 'Boxcolors')
boxColors.setAttribute('style', 'display: flex; justify-content: center;')

form.insertAdjacentHTML('afterend', boxColors.outerHTML);

const removeDivs = (element) => {
  element.forEach((el) => {
    el.remove()
  })
}

colors.addEventListener('change', (e) => {
  const selecteds = [...e.target.selectedOptions].map(el => el.value)
  const boxDivColors = document.querySelector('[data-js="Boxcolors"]')
  const divCriadas = document.querySelectorAll('[data-js="divColors"]')

  removeDivs(divCriadas)

  selecteds.map((div) => {
    let boxDiv = document.createElement("div");
    boxDiv.setAttribute('style', `width: 100px; height: 100px; background: ${div}`)
    boxDiv.setAttribute('data-js', 'divColors')

    boxDivColors.appendChild(boxDiv)
  })
})


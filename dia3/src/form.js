const nome = document.querySelector('[data-js="nome"]')

// const convertWords = (e) => {
//   return (e).toLowerCase()
//             .split(' ')
//             .map((w) => {
//               const a = w[0].toUpperCase() + w.slice(1)

//               return a.replace('De', 'de')
//                       .replace('Da', 'da')
//                       .replace('Do', 'do')
//                       .replace('Dos', 'dos')
//             }).join(' ')
// }

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



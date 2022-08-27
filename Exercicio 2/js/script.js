//Selecionando elementos
let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')
let resultado = document.getElementById('resultado')
let valoresVazio = document.getElementById('valoresVazio')

botao.onclick = () => {
  let delta = b.value ** 2 - 4 * a.value * c.value

  if (!a.value || !b.value || !c.value) {
    valoresVazio.innerText = 'Digite um valor válido'
  } else if (delta < 0) {
    resultado.value =
      'O valor de delta é: ' + delta + '\nNão existe raizes reais'
  } else if (delta > 0) {
    valoresVazio.innerText = ''
    let x1 = (-b.value + Math.sqrt(delta)) / (2 * a.value)
    let x2 = (-b.value - Math.sqrt(delta)) / (2 * a.value)
    resultado.value =
      'O valor de delta é:' +
      delta +
      '\nx1 = ' +
      x1.toFixed(2) +
      '\nx2 = ' +
      x2.toFixed(2)
  } else {
    valoresVazio.innerText = ''
    let valor = -b.value / (2 * a.value)
    resultado.value =
      'O valor de delta é: ' + delta + '\n A raíz da equação é : ' + valor
  }
}

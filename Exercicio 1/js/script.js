//Selecionando elementos
let ladoUm = document.getElementById('lado1')
let ladoDois = document.getElementById('lado2')
let ladoTres = document.getElementById('lado3')
let botao = document.getElementById('botao')
let resultado = document.getElementById('resultado')
let valoresVazio = document.getElementById('valoresVazio')

botao.onclick = () => {
  if (!ladoUm.value || !ladoDois.value || !ladoTres.value) {
    valoresVazio.innerText = 'Por favor preencher campos vazios'
  } else if (
    ladoUm.value == ladoDois.value &&
    ladoDois.value == ladoTres.value
  ) {
    valoresVazio.innerText = ''
    resultado.value = 'Equilátero'
  } else if (
    ladoUm.value == ladoDois.value ||
    ladoUm.value == ladoTres.value ||
    ladoTres.value == ladoDois.value
  ) {
    valoresVazio.innerText = ''
    resultado.value = 'Isósceles'
  } else {
    valoresVazio.innerText = ''
    resultado.value = 'Escaleno'
  }
}

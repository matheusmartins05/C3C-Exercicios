//Selecionando elementos
let valor = document.getElementById('valor')
let botao = document.getElementById('botaoExibir')
let resultado = document.getElementById('resultado')
let valorVazio = document.getElementById('valorVazio')
botaoExibir.onclick = () => {
  if (!valor.value) {
    resultado.value = '';
    valorVazio.innerText = 'Digite um valor válido'
    valor.style.border = '1px solid red'
  } else {
    let lista = []
    for (let i = 1; i <= valor.value; i++) {
      lista.push(i)

      if (i % 5 == 0 && i % 9 == 0) {
        lista[i - 1] = 'Luidy Moura'
      } else if (i % 9 == 0) {
        lista[i - 1] = 'Moura'
      } else if (i % 5 == 0) {
        lista[i - 1] = 'Luidy'
      }
    }

    resultado.value = lista
    valorVazio.innerText = ''
    valor.style.border = 'initial'
  }
}

//Selecionando elementos
let nota = document.getElementById('notaAluno')
let botao = document.getElementById('botao')
let resultado = document.getElementById('resultado')
let valoresVazio = document.getElementById('valoresVazio')

botao.onclick = () => {
  proxMult = Math.ceil(nota.value / 5) * 5 // Prox multiplos
  
  if (!nota.value) {
    valoresVazio.innerText = 'Digite um valor válido'
  } else if (nota.value < 38){
    valoresVazio.innerText = ''
    resultado.value = 'Aluno reprovado'
  }
  else if ( proxMult - nota.value < 3){
    valoresVazio.innerText = ''
    proxMult;
    resultado.value = 'Aluno aprovado' + '\nNota arredondada para ' + proxMult;
  } 





 
  

}

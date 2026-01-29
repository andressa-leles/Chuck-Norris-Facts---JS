const piada = document.querySelector('#joke')
const botao = document.querySelector("#next-joke");

async function buscarFatoChuckNorris(){
  try {
    piada.innerText = "Buscando um fato... 🕵️‍♂️";

    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const dados = await response.json()

    setTimeout(() =>{
      piada.innerText = dados.value
    }, 500)
  } catch {
    piada.innerText = "Erro ao buscar piada"
  }
}

botao.addEventListener('click', buscarFatoChuckNorris)
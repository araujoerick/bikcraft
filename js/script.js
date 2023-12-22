// Ativar Links do Menu

// Pego o array-like de links
const links = document.querySelectorAll(".header-menu a");

// Dentro da função tenho o argumento de cada item link
function ativarLink(link) {
  // Pegar o href da page atual e comparar
  const url = location.href; // href da page atual
  const href = link.href; // href da lista extraida do header-menu a
  const hrefSliced = href.slice(-href.length, -5); // Retira o .html do final do href

  // Como em um formulário o link muda, é necessário utilizar o método includes
  // que verifica se as strings contem pelo menos parte da outra
  // Se href da page atual inclui o href que está passando no loop, faça:
  if (url.includes(hrefSliced)) {
    link.classList.add("ativo");
  }
}

// Passo por cada item link com um loop
links.forEach(ativarLink);

// Ativar Ítens do Orçamento

// O JS já vem com uma classe que pega os parâmetros de uma url
// Para ativar uma classe é necessário colocar o new na frente
// const parametros = location.search;
const parametros = new URLSearchParams(location.search);

// Lista os parametros com o loop
// Pega o elemento input pelo id, que tem o mesmo nome do parâmetro
// Se elemento existe, faça
// Adiciona o checked nos elementos capturados
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  // console.log(elemento);
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes

// Pega a node list de perguntas com querySelectAll
// Lista cada botão/pergunta com o loop forEach
// Adiciona o evento de click e passa a função ativarPergunta que vai ocorrer ao clique
// Dentro do evento tem sempre acesso ao parâmetro de evento, o event
// E pegar o elemento/pergunta clicada com o currentTarget
// Pegar o atributo do aria-controls que é o mesmo que o id da resposta
// Seleciona resposta pelo id
// Adiciona a class ativa na resposta que foi clicada com classList e toggle
// É preciso mudar o aria-expanded também para true ou false
// Para isso, verifica se a resposta contain a class ativa
// Isso retorna um boolean, se sim true, senão false
// Setamos o valor com o setAttribute que transforma o boolean em string automaticamente

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");

  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

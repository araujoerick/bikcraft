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

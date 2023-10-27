'use strict';
/*O código 'use strict'; ativa o modo estrito (strict mode) no JavaScript. 
O modo estrito é uma funcionalidade introduzida no ECMAScript 5 que impõe 
um conjunto mais rigoroso de regras para escrever código JavaScript. Quando 
o modo estrito está habilitado, certos comportamentos não são permitidos e 
erros comuns são lançados, tornando o código mais seguro e fácil de depurar. */

const images = [
    { 'id': '1', 'url':'./img/chrono.jpg' },
    { 'id': '2', 'url':'./img/inuyasha.jpg' },
    { 'id': '3', 'url':'./img/tenchi.jpg' },
    { 'id': '4', 'url':'./img/tenjhotenge.jpg' },
    { 'id': '5', 'url':'./img/yuyuhakusho.jpg' },
    { 'id': '6', 'url':'./img/ippo.png' },
]
/*O código cria um array chamado images que armazena objetos contendo 
informações sobre imagens. Cada objeto possui duas propriedades: 'id', 
que representa o identificador da imagem, e 'url', que contém o caminho 
da imagem no sistema de arquivos. Essas informações podem ser utilizadas 
posteriormente para exibir as imagens em uma página da web ou em qualquer 
outra aplicação que manipule dados de imagens. */

const containerItems = document.querySelector('#container-items');
/*O código está utilizando o método querySelector do objeto document 
para selecionar um elemento HTML com o id container-items. Ele atribui 
esse elemento encontrado à constante containerItems.

Essa linha de código permite ter uma referência ao elemento HTML com 
o id container-items para realizar operações ou manipulações nele, 
como adicionar, remover ou modificar elementos dentro desse contêiner. 
Isso é feito através da referência containerItems que pode ser usada 
posteriormente no código JavaScript. */

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += ` <div class='item'> 
        <img src='${image.url}'
            </div>
        `
    })
}/*O código define uma função chamada loadImages, que recebe dois parâmetros: 
images e container.

Essa função percorre cada objeto no array images usando o método forEach. 
Para cada objeto, a função cria uma nova estrutura HTML representada 
por uma div com a classe "item" e uma imagem dentro dela. A URL da imagem 
é obtida a partir da propriedade url do objeto atual.

A estrutura HTML gerada é adicionada ao conteúdo existente do elemento container 
usando a propriedade innerHTML. Isso significa que cada imagem do array images 
será adicionada como um novo item dentro do elemento container.

Basicamente, essa função tem o objetivo de carregar imagens no DOM (Modelo de 
 Objeto de Documento) em um determinado contêiner, criando um elemento
 <div> para cada imagem e adicionando uma tag <img> com a respectiva 
URL da imagem. */

loadImages( images, containerItems );
/*O código está chamando a função loadImages e passando dois argumentos: 
images e containerItems.

Assumindo que loadImages é uma função definida anteriormente, essa linha 
de código invoca essa função com os parâmetros images e containerItems.

Essa linha de código provavelmente tem o propósito de carregar as imagens
 contidas no array images dentro do elemento HTML referenciado por 
 containerItems, utilizando a função loadImages. O comportamento exato 
 dessa função depende da implementação específica do código. */

let items = document.querySelectorAll('.item');
/*O código utiliza o método querySelectorAll do objeto document 
para selecionar todos os elementos HTML que possuem a classe "item". 
Ele armazena esses elementos em uma variável chamada items.*/ 

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}/*O código define uma função chamada previous que não recebe nenhum 
argumento.

Dentro dessa função, a linha containerItems.appendChild(items[0]); 
move o primeiro elemento da lista de elementos armazenados na variável 
items para se tornar o último elemento dentro do elemento referenciado 
por containerItems. Isso é feito usando o método appendChild, que adiciona 
um nó filho ao final da lista de filhos de um elemento.

Em seguida, a linha items = document.querySelectorAll('.item'); atualiza 
a variável items, selecionando novamente todos os elementos HTML que possuem 
a classe "item".

Basicamente, essa função tem o objetivo de fazer com que o primeiro elemento 
do grupo de itens seja movido para o final, criando um efeito de rolagem ou 
carrossel, onde os itens são exibidos em ordem cíclica. */

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}/* O código define uma função chamada next que não recebe nenhum argumento.

Dentro dessa função, a linha const lastItem = items[items.length - 1]; 
armazena o último elemento da lista de elementos armazenados na variável items 
em uma constante chamada lastItem.

Em seguida, a linha containerItems.insertBefore(lastItem, items[0]); 
insere o lastItem como o novo primeiro elemento dentro do elemento referenciado 
por containerItems. Isso é feito usando o método insertBefore, que insere um nó 
antes de um outro nó específico na lista de filhos de um elemento.

Após a inserção do lastItem, a linha items = document.querySelectorAll('.item'); 
atualiza a variável items, selecionando novamente todos os elementos HTML que possuem 
a classe "item".

Essa função tem o objetivo de fazer com que o último elemento do grupo de itens seja 
movido para a primeira posição, criando um efeito de rolagem ou carrossel, onde os itens 
são exibidos em ordem cíclica.*/

document.querySelector('#previous').addEventListener('click', previous);
/*O código seleciona o elemento HTML que possui o id "previous" usando o método querySelector 
do objeto document. Em seguida, ele adiciona um evento de clique a esse elemento usando o método 
addEventListener.

Quando ocorrer um clique no elemento com o id "previous", a função previous será executada.

Essa linha de código estabelece um evento de escuta para detectar quando o elemento com o 
id "previous" for clicado e, em seguida, executar a função previous associada a esse evento. 
Essa função provavelmente contém o código que deve ser executado quando o botão "previous" é clicado. */
document.querySelector('#next').addEventListener('click', next);
/*O código seleciona o elemento HTML que possui o id "next" usando o método querySelector do objeto document. 
Em seguida, ele adiciona um evento de clique a esse elemento usando o método addEventListener.

Quando ocorrer um clique no elemento com o id "next", a função next será executada.

Essa linha de código estabelece um evento de escuta para detectar quando o elemento com o id "next" 
for clicado e, em seguida, executar a função next associada a esse evento. Essa função provavelmente 
contém o código que deve ser executado quando o botão "next" é clicado. */
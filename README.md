# Semana 04 - Arrays, DOM e Eventos

## Descrição

Este projeto foi desenvolvido em JavaScript para praticar arrays, manipulação do DOM e eventos.

O projeto possui um arquivo HTML e um arquivo JavaScript.

## Estrutura



Semana_04/ ├── index.html ├── app.js └── README.md


## Arrays

Foram utilizados alguns métodos de arrays.

### forEach

O `forEach` percorre todos os itens de um array e executa uma ação para cada item.

Foi utilizado para mostrar uma mensagem para cada nome e para mostrar os produtos.

### map

O `map` cria um novo array a partir dos itens do array original.

Foi utilizado para transformar os nomes em letras maiúsculas e para pegar somente os nomes dos produtos.

### filter

O `filter` cria um novo array apenas com os itens que atendem a uma condição.

Foi utilizado para pegar os preços acima de 20 e os produtos com preço menor que 50.

### reduce

O `reduce` é utilizado para juntar os valores de um array em um único resultado.

Foi utilizado para somar os preços.

## DOM

Foi utilizado o `querySelector` para selecionar elementos da página.

O `querySelectorAll` foi utilizado para selecionar vários elementos.

O `textContent` foi utilizado para alterar textos.

O `innerHTML` foi utilizado para adicionar itens dentro da lista.

Também foi utilizado `createElement` para criar novos elementos HTML pelo JavaScript.

O `classList.add` adiciona uma classe a um elemento.

O `classList.contains` verifica se o elemento possui uma determinada classe.

## Eventos

Foram utilizados eventos de:

- click
- mouseover
- keyup
- submit

O `addEventListener` foi utilizado para executar funções quando esses eventos acontecem.

No formulário foi utilizado `preventDefault()` para impedir que a página recarregue.

## Event Delegation

Foi utilizado Event Delegation na lista.

Em vez de colocar um evento em cada `li`, foi colocado apenas um evento na `ul`.

O `e.target` identifica qual elemento recebeu o clique.

Dessa forma, os elementos que são adicionados depois pelo JavaScript também conseguem funcionar com o mesmo evento.

## Formulário

O formulário recebe uma tarefa digitada pelo usuário.

O método `trim()` é utilizado para retirar espaços vazios do começo e do final do texto.

Se o campo estiver preenchido, uma nova tarefa é adicionada à lista.

Se estiver vazio, nada é adicionado.

## Como executar

Abra o arquivo `index.html` no navegador.

Depois pressione `F12` para abrir o Console e visualizar os resultados do JavaScript.


:::

Estrutura final
Semana_04/
│
├── index.html
├── app.js
└── README.md


Essa versão mantém o código bem básico, usando function, forEach, map, filter, reduce, querySelector, createElement, addEventListener e if, sem colocar recursos mais avançados que não foram pedidos.

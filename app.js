let nomes = ["Ana", "João", "Maria"];

nomes.forEach(function(nome) {
    console.log("Olá, " + nome + "!");
});

let nomesMaiusculos = nomes.map(function(nome) {
    return nome.toUpperCase();
});

console.log(nomesMaiusculos);


let precos = [10, 25, 40, 5, 60];

let precosMaiores = precos.filter(function(preco) {
    return preco > 20;
});

let somaPrecos = precos.reduce(function(total, preco) {
    return total + preco;
}, 0);

console.log(precosMaiores);
console.log(somaPrecos);


let produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Caneta", preco: 5 },
    { nome: "Mochila", preco: 80 }
];

let nomesProdutos = produtos.map(function(produto) {
    return produto.nome;
});

let produtosBaratos = produtos.filter(function(produto) {
    return produto.preco < 50;
});

let totalProdutos = produtos.reduce(function(total, produto) {
    return total + produto.preco;
}, 0);

produtos.forEach(function(produto) {
    console.log(produto.nome + ": R$ " + produto.preco);
});

console.log(nomesProdutos);
console.log(produtosBaratos);
console.log(totalProdutos);


let titulo = document.querySelector("#titulo");

titulo.textContent = "Blog da Ana";


let paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(function(paragrafo) {
    console.log(paragrafo.textContent);
});


let lista = document.querySelector("#lista");

lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;


let novoItem = document.createElement("li");

novoItem.textContent = "Terceiro item";

lista.append(novoItem);

novoItem.classList.add("destaque");

console.log(novoItem.classList.contains("destaque"));


let tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

tarefas.forEach(function(tarefa) {
    let item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);
});

lista.querySelector("li").classList.add("feito");

console.log(lista.querySelectorAll("li").length);


let botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    console.log("Clicou!");
});

botao.addEventListener("mouseover", function() {
    botao.textContent = "Pode clicar!";
});


let campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function() {
    console.log(campoNome.value);
});


lista.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log(e.target.textContent);
    }
});


let itemNovo = document.createElement("li");

itemNovo.textContent = "Item criado pelo JavaScript";

lista.append(itemNovo);


let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    let tarefa = document.querySelector("#tarefa");
    let texto = tarefa.value.trim();

    if (texto !== "") {
        let item = document.createElement("li");

        item.textContent = texto;

        lista.append(item);

        tarefa.value = "";
    }
});
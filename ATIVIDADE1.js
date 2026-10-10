console.log("--- BLOCO 1: ARRAYS E MÉTODOS ---");
const nomes = ["Ana", "Carlos", "Beatriz"];

nomes.forEach(nome => {
    console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);


// 2. Array de preços, filter e reduce
const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter(preco => preco > 20);
console.log("Preços acima de 20:", precosAcimaDe20);

const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma total dos preços:", somaPrecos);


// 3. Array de objetos produtos, map, filter, reduce e forEach
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 120 },
    { nome: "Caneta", preco: 4 },
    { nome: "Estojo", preco: 25 }
];

const nomesProdutos = produtos.map(prod => prod.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosMenorQue50 = produtos.filter(prod => prod.preco < 50);
console.log("Produtos com preço menor que 50:", produtosMenorQue50);

const somaProdutos = produtos.reduce((acc, prod) => acc + prod.preco, 0);
console.log("Soma dos preços dos produtos:", somaProdutos);

produtos.forEach(prod => {
    console.log(`Nome: ${prod.nome} - R$ ${prod.preco}`);
});


/* ==========================================
   BLOCO 2 – Manipulação do DOM
   ========================================== */
console.log("\n--- BLOCO 2: MANIPULAÇÃO DO DOM ---");

// Selecionar o h1 (#titulo) e alterar o texto (substitua pelo seu nome)
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do João Silva";

// Selecionar todos os parágrafos (.texto) e imprimir no console
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach((p, index) => {
    console.log(`Parágrafo ${index + 1}:`, p.textContent);
});

// Selecionar a #lista e usar innerHTML para inserir 2 itens
const lista = document.querySelector("#lista");
// Nota: como já existem 3 itens estáticos no HTML (para o bloco 3), vamos adicionar mais 2 mantendo ou sobrescrevendo de acordo com a proposta.
lista.innerHTML += `
    <li>Item inserido via innerHTML 1</li>
    <li>Item inserido via innerHTML 2</li>
`;

// Criação de um <li> com createElement, texto "Terceiro item" e append na #lista
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.appendChild(terceiroItem);

// Uso de classList.add para aplicar classe 'destaque' e verificação com classList.contains
terceiroItem.classList.add("destaque");
console.log("O item possui a classe 'destaque'?", terceiroItem.classList.contains("destaque"));

// Criação de um array tarefas, forEach para adicionar à lista, classe 'feito' no primeiro e contagem total
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(tarefaTexto => {
    const li = document.createElement("li");
    li.textContent = tarefaTexto;
    lista.appendChild(li);
});

// Aplicar a classe 'feito' ao primeiro <li> da lista gerada/total
const todosLi = document.querySelectorAll("#lista li");
if (todosLi.length > 0) {
    todosLi[0].classList.add("feito");
}

console.log("Quantidade total de itens (li) na lista:", todosLi.length);


/* ==========================================
   BLOCO 3 – Eventos e Event Delegation
   ========================================== */
console.log("\n--- BLOCO 3: EVENTOS E EVENT DELEGATION ---");

const botao = document.querySelector("#botao");
const campoNome = document.querySelector("#nome");
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

// 1. Listener de click no #botao
botao.addEventListener("click", () => {
    console.log("Clicou!");
});

// 2. Listener de mouseover no #botao
botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

// 3. Listener de keyup no campo #nome
campoNome.addEventListener("keyup", (e) => {
    console.log("Valor atual do campo nome:", e.target.value);
});

// 4. Event Delegation na #lista
lista.addEventListener("click", (e) => {
    // Verifica se o alvo do clique (e.target) é um elemento LI
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log("Item clicado:", e.target.textContent);
    }
});

// Criação de um novo <li> dinamicamente via JS para testar o Event Delegation
const liDinamico = document.createElement("li");
liDinamico.textContent = "Item criado dinamicamente ( testa Delegation )";
lista.appendChild(liDinamico);


// 5. Formulário de Tarefas com submit e e.preventDefault()
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recarregar a página

    const textoTarefa = campoTarefa.value.trim(); // Ignora espaços vazios

    // Se o campo estiver vazio, não adicionar nada
    if (textoTarefa === "") {
        return;
    }

    const novoLi = document.createElement("li");
    novoLi.textContent = textoTarefa;
    lista.appendChild(novoLi);

    // Limpar o campo de input
    campoTarefa.value = "";
});
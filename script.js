// Definindo a lista de linguagens
const lista = document.querySelector("#lista");
const linguagens = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// Exibe o primeiro item da lista (o que já estava no seu código)
lista.textContent = linguagens[0]; // Apenas para referência, se necessário

// Agora, vamos exibir todos os itens da lista com um loop
for (let i = 0; i < linguagens.length; i++) {
    const item = document.createElement("li"); // Criando um novo item de lista <li>
    item.textContent = linguagens[i]; // Atribuindo o nome da linguagem ao texto do item
    lista.appendChild(item); // Adicionando o item à lista
}

// Definindo um objeto aluno1
let aluno1 = {
  nome: "Jairo",
  idade: 39,
  anoLetivo: "Universidade",
  materiasFavoritas: ["Matematica","Programação","Arte"]
}

// Exibindo as informações do aluno1 no console
console.log(aluno1.nome); 
console.log(aluno1.idade);
console.log(aluno1.materiasFavoritas);
console.log(aluno1.materiasFavoritas[1]);

// Atualizando o conteúdo HTML com o nome do aluno
const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;

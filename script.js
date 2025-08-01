// Definindo a lista de linguagens
const lista = document.querySelector("#lista");
const linguagens = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// Exibe o primeiro item da lista
lista.textContent = linguagens[0];

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
  materiasFavoritas: ["Matematica", "Programação", "Arte"]
}

// Selecionando o elemento HTML onde as informações serão mostradas
const alunoInfo = document.querySelector("#aluno");

// Exibindo o nome do aluno
alunoInfo.textContent = `Nome: ${aluno1.nome}`;

// Adicionando a idade do aluno
const idadeInfo = document.createElement("p");
idadeInfo.textContent = `Idade: ${aluno1.idade}`;
alunoInfo.appendChild(idadeInfo);

// Adicionando o ano letivo
const anoLetivoInfo = document.createElement("p");
anoLetivoInfo.textContent = `Ano Letivo: ${aluno1.anoLetivo}`;
alunoInfo.appendChild(anoLetivoInfo);

// Adicionando as matérias favoritas
const materiasInfo = document.createElement("p");
materiasInfo.textContent = `Matérias Favoritas: ${aluno1.materiasFavoritas.join(", ")}`;
alunoInfo.appendChild(materiasInfo);

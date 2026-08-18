// importar apenas as funções qie ´recisamos utilizar do "fs"
import { existsSync, readFileSync, mkdirSync, writeFileSync } from "fs";

// 1. Definição de Tipo de dado (model)
type Livro = {
    titulo: string;
    autor: string;
    ano: number;
    lido: boolean;
}

// 2. Lista inicial de dados (mock data)
const livros: Livro[] = [
    {titulo: "Dom Casunrro", autor: "Machado de Assis", ano: 1899, lido: true},
    {titulo: "A Revolução dos bixos", autor: "George Orwell", ano: 1945, lido: false}
];

// 3. Verificação e criação do diretório "dados"
const pasta = "./dados";
if (!existsSync(pasta)) { // verifica a existencia do caminho
    mkdirSync(pasta); // caso não exista ele cria uma pasta com nome "data"
}

// 4. salvando os dados convertidos na pasta em JSON
const caminho = `${pasta}/livros.json`;
writeFileSync(caminho, JSON.stringify(livros, null, 2));
console.log("Dados salvos com sucesso! YEAHH!");

//5. lendo os dados de volta e convertendo em objetos
const textoLido = readFileSync(caminho, "utf-8");
const livrosRecuperados: Livro[] = JSON.parse(textoLido);

// 6. Exibição formatada do conteudo recuperado
console.log("\n ==== LIVROS RECUPERADO PARSA ====");
livrosRecuperados.forEach((livro, index) => {
    const status = livro.lido ? "LIDO!!!" : "NÂO LIDO!!!";
    console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} (${livro.ano}) - ${status}`);
});
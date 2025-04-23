// Lista de categorias criativas com exemplos
const categories = [
    { category: "Vilões de desenho animado", example: "Plankton, Cruella, Scar" },
    { category: "Comidas que parecem nojentas mas são gostosas", example: "Escargot, Natto, Durian" },
    { category: "Palavras que todo mundo escreve errado", example: "Exceção, Privilégio, Asterisco" },
    { category: "Coisas que só existem no Brasil", example: "Paçoca, Guaraná, Coxinha" },
    { category: "Memes famosos", example: "Nazaré Confusa, Chapolin, Stonks" },
    { category: "Músicas que todo mundo sabe cantar", example: "Macarena, Thriller, YMCA" },
    { category: "Mentiras que contamos para crianças", example: "Coelho da Páscoa, Cegonha, Papai Noel" },
    { category: "Coisas que fazem barulho irritante", example: "Unha no quadro, Alarme, Bebê chorando" },
    { category: "Profissões que não existem mais", example: "Acendedor de lampião, Datilógrafo, Telegrafista" },
    { category: "Superstições brasileiras", example: "Chinelo virado, Sal derramado, Guarda-chuva aberto dentro de casa" },
    { category: "Invenções que mudaram o mundo", example: "Roda, Internet, Eletricidade" },
    { category: "Expressões que só fazem sentido em português", example: "Dar uma mão, Fazer hora, Pagar o pato" },
    { category: "Coisas que todo mundo tem medo mas não admite", example: "Barata voando, Dentista, Falar em público" },
    { category: "Objetos que sempre somem", example: "Meia, Grampeador, Controle remoto" },
    { category: "Personagens que todo mundo odeia", example: "Dolores Umbridge, Joffrey Baratheon, Peppa Pig" }
];

// Elementos do DOM
const generateBtn = document.getElementById('generateBtn');
const categoryList = document.getElementById('categoryList');

// Array para armazenar categorias já usadas
let usedCategories = [];

// Função para gerar uma categoria aleatória não utilizada
function getRandomCategory() {
    if (usedCategories.length === categories.length) {
        usedCategories = []; // Reseta quando todas as categorias foram usadas
    }

    let availableCategories = categories.filter(cat => !usedCategories.includes(cat));
    let randomCategory = availableCategories[Math.floor(Math.random() * availableCategories.length)];
    usedCategories.push(randomCategory);
    
    return randomCategory;
}

// Função para adicionar categoria na tabela
function addCategoryToTable(category) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${category.category}</td>
        <td>${category.example}</td>
    `;
    
    // Adiciona efeito de fade in
    row.style.opacity = '0';
    categoryList.insertBefore(row, categoryList.firstChild);
    
    // Trigger reflow
    row.offsetHeight;
    
    // Adiciona a classe com animação
    row.style.transition = 'opacity 0.5s ease-in';
    row.style.opacity = '1';
    
    // Mantém apenas as últimas 5 categorias
    if (categoryList.children.length > 5) {
        categoryList.lastElementChild.remove();
    }
}

// Event listener para o botão de gerar
generateBtn.addEventListener('click', () => {
    const category = getRandomCategory();
    addCategoryToTable(category);
    
    // Adiciona efeito de clique no botão
    generateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        generateBtn.style.transform = 'scale(1)';
    }, 100);
});

// Gera primeira categoria automaticamente
window.addEventListener('load', () => {
    const category = getRandomCategory();
    addCategoryToTable(category);
});

<<<<<<< HEAD
// Importa módulos app e BrowWindow do Electron
const {app, BrowserWindow } = require('electron'); 

// Função para criar a janela principal
function createWindow(){

    // Criar uma nova instância do BrowserWindow
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    })

    // Carregar o arquivo HTML
    window.loadFile('src/pages/index.html')

}

// Evento que é acionado quando o Electron está pronto
app.whenReady().then( () => {
    createWindow();
=======
// Importa módulos app e BrowWindow do Electron
const {app, BrowserWindow } = require('electron'); 

// Função para criar a janela principal
function createWindow(){

    // Criar uma nova instância do BrowserWindow
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    })

    // Carregar o arquivo HTML
    window.loadFile('src/pages/index.html')

}

// Evento que é acionado quando o Electron está pronto
app.whenReady().then( () => {
    createWindow();
>>>>>>> 29ce910904d69b54073bdfa2724ea210e0843837
} )
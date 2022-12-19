// Importa arquivos e bibliotecas necessárias
const express = require("express")
const path = require("path")
const port = 3333

// Define o diretório inicial do projeto
let initialPath = path.join(__dirname, "public")

// Cria o servidor estático da aplicação
let app = express()
app.use(express.static(initialPath))

app.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"))
})

app.listen(port, () => {
    console.log(`Server start up on port ${port}!`)
})
const express = require('express')
const path = require('path')
const app = express()

// Serve les fichiers statiques depuis le dossier de construction
app.use(express.static(path.join(__dirname, 'build')))

// Gère toutes les routes en renvoyant le fichier index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

// Port sur lequel le serveur écoute
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`)
})
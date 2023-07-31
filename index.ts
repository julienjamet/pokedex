const express = require('express')

const app = express()
const port = 3001

app.get('/', (req: any, res: any) => res.send('Hello !'))
app.get('/api/pokemons/1', (req: any, res: any) => res.send('Hello, Bulbizarre !'))

app.listen(port, () => console.log(`Listening on port ${port} !`))
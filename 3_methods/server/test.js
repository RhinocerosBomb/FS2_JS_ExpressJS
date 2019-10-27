const express = require('express')
const appServer = express()
const port = 999
appServer.get('/', (req, res) => res.send('Hello World'));
appServer.post('/', (req, res) => res.send('Got a POST request'));
appServer.put('/', (req, res) => res.send('Got a PUT request'));
appServer.listen(port, () => console.log(`Ok on port ${port}`))

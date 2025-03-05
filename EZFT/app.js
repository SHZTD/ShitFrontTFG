const express = require('express')
const path = require('path')
const app = express()
const port = 7484

// static public archives
app.use(express.static(path.join(__dirname, 'public')))

// ruta index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
  console.log(`Port listener: ${port}`)
})

function init() {
    console.log("App has initialized.")
}

init()

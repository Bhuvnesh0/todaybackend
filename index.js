require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req , res) => {
  res.send('hellooo the kung fu panda')
})

app.get('/login' , (req,res) => {
  res.send('<h1> please log in at chai aur code')
})

app.get('/youtube' , (req,res) => {
  res.send('<h2> everything is perfect till now </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
const cors = require('cors')
require('./db/db')

const estoreController = require('./controllers/estore')
const whiteList = ["http://localhost:3000"]

const corsOptions = {
  origin: (origin,callback)=>
      callback(null,true)
}

app.use(cors(corsOptions))
app.use(express.json());
app.use('/estore',estoreController)


app.listen(PORT, ()=>{
    console.log('listening on port', PORT);
})

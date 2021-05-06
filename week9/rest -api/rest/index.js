const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

let data=[
    {
        "id": "10002",
        "name": "die hard",
        "year": "1999",
        "genre": "action",
        "income": "10000000"
      },
      {
        "id": "10003",
        "name": "hello",
        "year": "1999",
        "genre": "action",
        "income": "10000000"
      }, {
        "id": "10004",
        "name": "hoi",
        "year": "1999",
        "genre": "action",
        "income": "10000000"
      }
]


app.get('/', (req, res)=> {
    res.send("merhabayin") 
})

app.get("/movies", (req, res)=>{
    res.status(200).json(data)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
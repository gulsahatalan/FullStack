import express from 'express';
import bodyParser from 'body-parser';
const app=express();
import { v4 as uuidv4 } from 'uuid';
const port=3001;

let data=[
   {
   "movieId": 1002,
   "duration": 10,
   "person": "Hamide"
},
    {
   "movieId": 1004,
   "duration": 10,
   "person": "Husniye"
},
{
    "movieId": 1005,
    "duration": 10,
    "person": "Hi Coders"
 }
    ]
    
app.use(bodyParser.json());
app.get('/', (req, res)=>{
    res.status(200).json(data)
})

app.get("/rent/:id",(req,res)=>{
const { id } = req.params;
const movie = data.find(movie=>movie.movieId === parseInt(id))
if(movie){
    res.status(200).json(movie)
}else{
    res.status(404).send("Film bulunamadi.")
}
})


let nextID =uuidv4();
app.post("/rent", (req, res) =>{
let newMovie = req.body;
newMovie.id = nextID;
data.push(newMovie);
res.status(200).json(newMovie)
})


app.listen(port,()=>console.log(`Server running on port : http://localhost:${port}`));


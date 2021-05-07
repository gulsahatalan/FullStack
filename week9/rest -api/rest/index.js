import express from 'express';
import bodyParser from 'body-parser';
const app=express();
const port=3000;
let data=[
    {
      id: 10002,
      name: "die hard",
      year: "1999",
      genre: "action",
      income: 10000000
    },
    {
        id: 10003,
        name: "die light",
        year: "1998",
        genre: "comics",
        income: 11000000
      }
    ]
    
app.use(bodyParser.json());
app.get('/', (req, res)=>{
    res.status(200).json(data)
})

app.get("/movies/:id",(req,res)=>{
const { id } = req.params;
const movie = data.find(movie=>movie.id === parseInt(id))
if(movie){
    res.status(200).json(movie)
}else{
    res.status(404).send("film yok")
}
})


let nextID =10004 
app.post("/movies", (req, res) =>{
let newMovie = req.body;
newMovie.id = nextID;
nextID++
data.push(newMovie);
res.status(200).json(newMovie)
})

app.delete("/movies/:id",(req,res) => {
const deletedMovieId = req.params.id;
const deletedMovie = data.find(movie=> movie.id === parseInt(deletedMovieId));
if(deletedMovie){
data = data.filter(movie => movie.id !==  parseInt(deletedMovieId))  
res.status(200).end();
}else{
    res.status(404).json({errorMessage: "Film Yok"})
}
})

app.put("/movies/:id", (req,res)=>{
   const editMovieId = req.params.id;
   let editMovie = req.body;
   let movie = data.find(movie=>movie.id === parseInt(editMovieId))
   if(movie){
      
       res.status(200).send(editMovie);

   }
})

app.listen(port,()=>console.log(`Server running on port : http://localhost:${port}`));


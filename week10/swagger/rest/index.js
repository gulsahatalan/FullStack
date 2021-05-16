import express, { Router } from "express";
import router from "./router/movies.js";
import routers from "./router/rent.js";

// import  routerSwagger from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

// app.use('/docs', swaggerUi.serve);
// router.get('/rent', swaggerUi.setup(swaggerDocument));

const app = express();
const port = 3000;
app.use("/movies", router);
app.use("/rent", routers);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/abc", (req, res) => {
  res.send("HELLO REST API");
});

app.listen(port, () =>
  console.log(`Server running on port : http://localhost:${port}`)
);


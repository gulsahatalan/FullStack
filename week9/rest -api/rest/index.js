import express from "express";
import router from "./routers/moviesRouter.js";
import routers from "./routers/rentRouter.js";

const app = express();
const port = 3000;
app.use("/movies", router);
app.use("/rent", routers);

app.get("/", (req, res) => {
  res.send("HELLO REST API");
});

app.listen(port, () =>
  console.log(`Server running on port : http://localhost:${port}`)
);

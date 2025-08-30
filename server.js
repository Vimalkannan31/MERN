import express from "express";
import ConnectDB from "./lib/db.js";
import route from "./routes/employee.route.js";

const app = express();
const PORT = 5000;

//Database connection
ConnectDB();

//config
app.use(express.json());

//route
app.use("/ems", route);

app.listen(PORT, () => {
  console.log(`The server is Running at http://localhost:${PORT}`);
});

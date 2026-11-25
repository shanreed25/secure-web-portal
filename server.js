import "dotenv/config";
import express from "express";
import db from "./config/connection.js";
import routes from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);

db.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
});

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./app/routes/userRoutes.js";

const app = express();
const port = 3070;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello guys berhasil diuptae!");
});

app.use("/user", userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

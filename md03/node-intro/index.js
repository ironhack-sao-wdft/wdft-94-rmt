import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());

app.get("/welcome", (req, res) => {
  return res.status(404).json("Bem vindo!");
});

// CRUD

const data = [];

app.post("/", (req, res) => {
  const entry = { ...req.body, id: uuidv4() };

  data.push(entry);

  return res.status(201).json(entry);
});

app.get("/", (req, res) => {
  return res.status(200).json(data);
});

app.get("/:entryId", (req, res) => {
  const { entryId } = req.params;

  const entry = data.find((currentEntry) => {
    return currentEntry.id === entryId;
  });

  return res.status(200).json(entry);
}); // read details

// app.put();
// app.delete();

app.listen(4000, () => {
  console.log("Server up and running at port 4000.");
});

// axios.get("http://localhost:4000/welcome");

import express from 'express'
import { addTodo, deleteTodo, showTodo, todoList, todoPage } from './routes.tsx';

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.redirect("/todos")
});

app.get("/todos", (req, res) => {
  if (req.header("hx-request")) {
    return res.send(todoList());
  } 
  res.send(todoPage());
});

app.post("/todos", (req, res) => {
  const content = (req.body.text ?? "").trim();
  res.send(addTodo(content))
});

app.get("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  res.send(showTodo(id))
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(deleteTodo(id))
});

app.listen(port, () => {
  console.log(`Htmx ready to be server on port ${port}`)
})

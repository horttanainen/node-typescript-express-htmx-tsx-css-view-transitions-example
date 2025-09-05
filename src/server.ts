import express from 'express'
import type {Request, Response} from 'express'
import { addTodo, deleteTodo, todoPage } from './routes.tsx';

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));


app.get("/", (_req: Request, res: Response) => {
  res.send(todoPage());
});

app.post("/todos", (req, res) => {
  const content = (req.body.text ?? "").trim();
  res.send(addTodo(content))
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(deleteTodo(id))
});

app.listen(port, () => {
  console.log(`Htmx ready to be server on port ${port}`)
})

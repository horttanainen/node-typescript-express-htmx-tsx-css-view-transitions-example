import ReactDOMServer from "react-dom/server";
import { TodoPage } from "./client/TodoPage.tsx";
import TodoList from "./client/TodoList.tsx";

type Todo = { id: number; text: string };
let todos: Todo[] = [{ id: 1, text: "Learn HTMX with TSX" }];

const doctype = "<!doctype html>"

export function todoPage() {
  const html = ReactDOMServer.renderToStaticMarkup(
    <TodoPage todos={todos} />
  );

  return doctype + html
}

export function addTodo(text: string) {
  if (text) {
    todos.unshift({ id: Date.now(), text });
  }
  return ReactDOMServer.renderToStaticMarkup(<TodoList todos={todos} />);
}


export function deleteTodo(id: number) {
  todos = todos.filter(t => t.id !== id);
  return ReactDOMServer.renderToStaticMarkup(<TodoList todos={todos} />);
}

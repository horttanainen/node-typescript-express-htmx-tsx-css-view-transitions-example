import ReactDOMServer from "react-dom/server";
import { TodoPage } from "./client/TodoPage.tsx";
import TodoList from "./client/TodoList.tsx";
import { TodoView } from "./client/Todo.tsx";
import type { Todo } from "./client/Todo.tsx";

let todos: Todo[] = [{ id: 1, text: "Learn HTMX with TSX" }];

const doctype = "<!doctype html>"

export function todoPage() {
  const html = ReactDOMServer.renderToStaticMarkup(
    <TodoPage todos={todos} />
  );

  return doctype + html
}

export function todoList() {
    return ReactDOMServer.renderToStaticMarkup(<TodoList todos={todos} />)
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

export function showTodo(id: number) {
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return `<div id="main"><p>Todo not found.</p></div>`
  }
    return ReactDOMServer.renderToStaticMarkup(<TodoView todo={todo} />)
}



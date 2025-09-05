import TodoList from "./TodoList.tsx";

type Props = { todos: { id: number; text: string }[] };

export function TodoPage({ todos }: Props) {
  return (
    <html>
      <head>
        <title>HTMX + TSX</title>
        <script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.6/dist/htmx.min.js"></script>
      </head>
      <body>
        <h1>Todos</h1>
        <form hx-post="/todos" hx-target="#todo-list" hx-swap="outerHTML">
          <input name="text" placeholder="Add todo..." required />
          <button>Add</button>
        </form>

        <TodoList todos={todos} />
      </body>
    </html>
  );
}


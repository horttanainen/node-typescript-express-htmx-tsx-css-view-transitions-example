import TodoList from "./TodoList.tsx";

type Props = { todos: { id: number; text: string }[] };

export function TodoPage({ todos }: Props) {
  return (
    <html>
      <head>
        <title>HTMX + TSX</title>
        <script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.6/dist/htmx.min.js"></script>
        <link href="/styles.css" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex items-center justify-center bg-green-200">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Todos</h1>
          <form 
            className="flex gap-2 mb-6"
            hx-post="/todos" 
            hx-target="#todo-list" 
            hx-swap="outerHTML">
            <input 
              className="flex-grow border rounded px-3 py-2"
              name="text" 
              placeholder="Add todo..." 
              required />
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Add
            </button>
          </form>

          <div id="main">
            <TodoList todos={todos} />
          </div>
        </div>
      </body>
    </html>
  );
}



export type Todo = { id: number; text: string };
export function TodoView({ todo }: { todo: Todo }) {
  return (
    <div id="main">
      <h2>Todo #{todo.id}</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Text:</strong> {todo.text}</p>

      <button
        hx-get="/todos"
        hx-target="#main"
        hx-swap="outerHTML"
        hx-push-url="/todos"
        type="button"
      >
        ← Back to list
      </button>
    </div>
  );
}

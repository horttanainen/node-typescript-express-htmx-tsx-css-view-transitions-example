
type Props = { todos: { id: number; text: string }[] };

export default function TodoList({ todos }: Props) {

  if (todos.length === 0) {
    return (
      <div id="todo-list">
        <ul>
            <li><em>No todos yet</em></li>
        </ul>
      </div>
    )
  }
  return (
      <div id="todo-list">
        <ul>
          {
            todos.map(t => (
              <li key={t.id}>
                {t.text}
                {" "}
                <button
                  hx-get={`/todos/${t.id}`}
                  hx-target="#main"
                  hx-swap="innerHTML"
                  hx-push-url={`/todos/${t.id}`}
                  type="button"
                >
                  Show
                </button>
                {" "}
                <form
                  hx-delete={`/todos/${t.id}`}
                  hx-target="#todo-list"
                  hx-swap="outerHTML"
                  style={{ display: "inline" }}
                >
                  <button type="submit">✕</button>
                </form>
              </li>
            ))
          }
        </ul>
    </div>
  );
}

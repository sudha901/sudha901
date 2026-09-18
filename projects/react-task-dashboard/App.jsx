import { useMemo, useState } from "react";

const initialTasks = [
  { id: 1, title: "Design landing page", status: "In Progress" },
  { id: 2, title: "Review client feedback", status: "Todo" },
  { id: 3, title: "Publish release notes", status: "Done" },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [query, setQuery] = useState("");

  const filteredTasks = useMemo(
    () => tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase())),
    [tasks, query]
  );

  return (
    <main className="dashboard">
      <header>
        <p>WORKSPACE</p>
        <h1>Task Dashboard</h1>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search tasks..."
        />
      </header>

      <section className="task-grid">
        {["Todo", "In Progress", "Done"].map(status => (
          <article key={status}>
            <h2>{status}</h2>
            {filteredTasks.filter(task => task.status === status).map(task => (
              <div className="task-card" key={task.id}>{task.title}</div>
            ))}
          </article>
        ))}
      </section>
    </main>
  );
}

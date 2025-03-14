import {useState} from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Column from "./components/Column";
import { Task, Column as ColumnType } from "./types";
import './index.css';
import'./style.css';

const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const INITIAL_TASKS: Task[] = [
  { id: "1", title: "Task 1", description: "First task", status: "TODO" },
  { id: "2", title: "Task 2", description: "Second task", status: "TODO" },
  { id: "3", title: "Task 3", description: "Third task", status: "IN_PROGRESS" },
];

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task["status"];

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  return (
    <div className="kanban-board">
      <DndContext onDragEnd={handleDragEnd}>
        {COLUMNS.map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={tasks.filter((task) => task.status === column.id)}
          />
        ))}
      </DndContext>
    </div>
  );
}

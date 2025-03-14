import React from "react";
import { Task, Column as ColumnType } from "../types";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";


interface ColumnProps {
  column: ColumnType;
  tasks: Task[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  const { setNodeRef } = useDroppable({ id: column.id });

  return (
    <div className="kanban-column" ref={setNodeRef}>
      <h2 className="kanban-column-title">{column.title}</h2>
      <div className="kanban-task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;

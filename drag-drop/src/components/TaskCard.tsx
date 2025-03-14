import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { Task } from "../types";

interface TaskProps {
  task: Task;
}

const TaskCard: React.FC<TaskProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="kanban-task"
      style={{ transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;

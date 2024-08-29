// src/components/TaskBoard/Task.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './TaskBoard.css';

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task"
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Task;

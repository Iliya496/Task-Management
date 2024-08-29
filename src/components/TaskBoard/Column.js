// src/components/TaskBoard/Column.js
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import './TaskBoard.css';

const Column = ({ columnId, column, tasks }) => {
  return (
    <Draggable draggableId={columnId} index={0}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="column"
        >
          <h2 {...provided.dragHandleProps}>{column.title}</h2>
          <Droppable droppableId={columnId}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="task-list"
              >
                {tasks.map((task, index) => (
                  <Task key={task._id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;

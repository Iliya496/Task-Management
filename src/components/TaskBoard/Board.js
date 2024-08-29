import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';
import axios from 'axios';
import './TaskBoard.css';

const Board = () => {
  const [columns, setColumns] = useState({});

  useEffect(() => {
    const fetchColumns = async () => {
      const result = await axios.get('/api/tasks');
      setColumns(result.data);
    };
    fetchColumns();
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    // Implement drag-and-drop logic here

    // Update the state and backend
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {Object.keys(columns).map((columnId) => (
              <Column key={columnId} column={columns[columnId]} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;

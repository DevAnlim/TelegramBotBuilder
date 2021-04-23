import { PropTypes } from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from './ConstructorMain.module.scss';

export default function ConstructorMain() {
  const onDragEnd = () => {
    console.log('Drag ended');
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={
              snapshot.isDraggingOver
                ? `${styles['constructor-main-droppable']} ${styles['constructor-main-droppable_dragged']}`
                : styles['constructor-main-droppable']
            }
            {...provided.droppableProps}
          >
            <Draggable draggableId="0" index={0}>
              {(provided, snapshot) => (
                <div
                  className={
                    snapshot.isDragging
                      ? `${styles['constructor-main-draggable']} ${styles['constructor-main-draggable_dragged']}`
                      : styles['constructor-main-draggable']
                  }
                  style={provided.draggableProps.style}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                />
              )}
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

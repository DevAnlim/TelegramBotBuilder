import { Draggable } from 'react-beautiful-dnd';
import styles from './ConstructorBlock.module.scss';

export default function ConstructorBlock({ id, index, style, children }) {
  return (
    <Draggable key={id} draggableId={`${id}`} index={index}>
      {(provided, snapshot) => {
        const customStyle = {
          ...style,
          ...provided.draggableProps.style,
        };

        return (
          <div
            className={
              snapshot.isDragging
                ? `${styles['constructor-block']} ${styles['constructor-block_drag']}`
                : styles['constructor-block']
            }
            ref={provided.innerRef}
            {...provided.draggableProps}
            style={customStyle}
            {...provided.dragHandleProps}
          >
            {children}
          </div>
        );
      }}
    </Draggable>
  );
}

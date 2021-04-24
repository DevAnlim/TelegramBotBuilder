import { PropTypes } from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import styles from './ToolsListItem.module.scss';

export default function ToolsListItem({ id, children, index }) {
  return (
    <Draggable key={id} draggableId={`${id}`} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className={
              snapshot.isDragging
                ? `${styles['tools-list__item']} ${styles['tools-list__item_dragged']}`
                : styles['tools-list__item']
            }
            style={provided.draggableProps.style}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {children}
          </div>
        );
      }}
    </Draggable>
  );
}

ToolsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.elementType.isRequired,
    PropTypes.instanceOf(Object),
  ]),
  index: PropTypes.number.isRequired,
};

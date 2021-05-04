import { PropTypes } from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import styles from './ToolsList.module.scss';

export default function ToolsList({
  children,
  id,
  className,
  classNameDrag,
  type,
}) {
  return (
    <Droppable droppableId={id} type={type}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            className={
              snapshot.isDraggingOver
                ? `${className} ${classNameDrag}`
                : className
            }
            style={provided.droppableProps.style}
            {...provided.droppableProps}
          >
            {children}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
}

ToolsList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType.isRequired,
    PropTypes.instanceOf(Object).isRequired,
  ]),
  id: PropTypes.string.isRequired,
  type: PropTypes.stringIsRequired,
};

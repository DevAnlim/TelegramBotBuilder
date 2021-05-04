import { PropTypes } from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

export default function ToolsList({
  children,
  id,
  className,
  classNameDrag,
  type,
  direction,
}) {
  return (
    <Droppable droppableId={id} type={type} direction={direction}>
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

ToolsList.defaultProps = {
  direction: 'vertical',
};

ToolsList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType.isRequired,
    PropTypes.instanceOf(Object).isRequired,
  ]),
  id: PropTypes.string.isRequired,
  type: PropTypes.string.IsRequired,
  direction: PropTypes.string,
};

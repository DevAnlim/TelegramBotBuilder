import { PropTypes } from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

export default function ToolsListItem({
  id,
  children,
  index,
  className,
  classNameDrag,
  style,
}) {
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
              snapshot.isDragging ? `${className} ${classNameDrag}` : className
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

ToolsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.elementType.isRequired,
    PropTypes.instanceOf(Object),
  ]),
  index: PropTypes.number.isRequired,
};

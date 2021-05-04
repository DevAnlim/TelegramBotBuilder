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
  const withStyles = draggableStyles => ({
    ...style,
    ...draggableStyles,
  });

  return (
    <Draggable key={id} draggableId={`${id}`} index={index}>
      {(provided, snapshot) => {
        console.log(withStyles(provided.draggableProps.style));
        return (
          <div
            className={
              snapshot.isDraggingOver
                ? `${className} ${classNameDrag}`
                : className
            }
            style={withStyles(provided.draggableProps.style)}
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

import { PropTypes } from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

export default function ConstructorMainItem({
  id,
  children,
  index,
  variant,
  variantDrag,
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
              snapshot.isDragging ? `${variant} ${variantDrag}` : variant
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

ConstructorMainItem.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.elementType.isRequired,
    PropTypes.instanceOf(Object),
  ]),
  variant: PropTypes.instanceOf(Object).isRequired,
  variantDrag: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};

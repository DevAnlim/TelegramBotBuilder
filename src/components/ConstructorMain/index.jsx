import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import ToolsList from '../ToolsList';
import ToolsListItem from '../ToolsListItem';
import styles from './ConstructorMain.module.scss';

export default function ConstructorMain({ list, destinationList, setList }) {
  const [toolsList, setToolsList] = useState(list);

  useEffect(() => {
    setToolsList(list);
  }, [list]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        toolsList,
        result.source.index,
        result.destination.index,
      );

      setToolsList(items);
    } else {
      const result = move(list, destinationList, source, destination);

      setList({ main: result.droppable, toolbar: result.droppable2 });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ToolsList
        id="droppable2"
        className={styles['constructor-main-list']}
        classNameDrag={styles['constructor-main-list_dragged']}
        type="OPTIONS"
      >
        {toolsList.map(({ id, label }, index) => (
          <ToolsListItem id={id} index={index}>
            {label}
          </ToolsListItem>
        ))}
      </ToolsList>
    </DragDropContext>
  );
}

ConstructorMain.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
};

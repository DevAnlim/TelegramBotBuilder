import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import styles from './ConstructorTools.module.scss';
import ToolsList from '../ToolsList';
import ToolsListItem from '../ToolsListItem';

export default function ConstructorTools({ list }) {
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

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      toolsList,
      result.source.index,
      result.destination.index,
    );

    setToolsList(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ToolsList
        id="droppable"
        className={styles['constructor-tools-list']}
        classNameDrag={styles['constructor-tools-list_dragged']}
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

ConstructorTools.defaultProps = {};

ConstructorTools.propTypes = {};

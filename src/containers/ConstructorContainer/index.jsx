import { useReducer, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ConstructorHeader from '../../components/ConstructorHeader';
import ConstructorTools from '../../components/ConstructorTools';
import DivContainer from '../../base/DivContainer';
import ConstructorMain from '../../components/ConstructorMain';

export default function ConstructorContainer() {
  const [list, setList] = useState({
    main: [],
    toolbar: [
      { id: 0, label: 'Message' },
      { id: 1, label: 'Message1' },
      { id: 2, label: 'Message2' },
      { id: 3, label: 'Message3' },
    ],
  });

  const id2List = {
    constructorMain: 'main',
    constructorSideBar: 'toolbar',
  };

  const getList = id => list[id2List[id]];

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
        getList(source.droppableId),
        result.source.index,
        result.destination.index,
      );

      if (source.droppableId === 'constructorMain') {
        setList({ ...list, main: items });
      } else {
        setList({ ...list, toolbar: items });
      }
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination,
      );

      setList({
        main: result.constructorMain,
        toolbar: result.constructorSideBar,
      });
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <DivContainer
          style={{ width: '100%', display: 'flex', alignItems: 'center' }}
        >
          <DivContainer
            style={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ConstructorHeader onClick={() => {}} />

            <ConstructorMain list={list.main} />
          </DivContainer>
          <ConstructorTools list={list.toolbar} />
        </DivContainer>
      </DragDropContext>
    </>
  );
}

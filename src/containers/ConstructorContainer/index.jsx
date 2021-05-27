import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ConstructorHeader from '../../components/ConstructorHeader';
import ConstructorTools from '../../components/ConstructorTools';
import DivContainer from '../../base/DivContainer';
import ConstructorMain from '../../components/ConstructorMain';
import Button from '../../base/Button';

export default function ConstructorContainer() {
  const [list, setList] = useState({ constructorMain: [] });
  const [index, setIndex] = useState(6);

  const toolbar = [
    { id: 1, label: 'API' },
    // { id: 2, label: 'Message1' },
    // { id: 3, label: 'Message2' },
    // { id: 4, label: 'Message3' },
  ];

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const copy = (source, destination, droppableSource, droppableDestination) => {
    console.log('==> dest', destination);

    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: index });

    setIndex(index + 1);
    return destClone;
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

    console.log('==> result', result);

    // dropped outside the list
    if (!destination) {
      return;
    }

    switch (source.droppableId) {
      case destination.droppableId:
        setList({
          [destination.droppableId]: reorder(
            list[destination.droppableId],
            source.index,
            destination.index,
          ),
        });
        break;
      case 'constructorSideBar':
        setList({
          [destination.droppableId]: copy(
            toolbar,
            list[destination.droppableId],
            source,
            destination,
          ),
        });
        break;
      default:
        setList(
          move(
            list[source.droppableId],
            list[destination.droppableId],
            source,
            destination,
          ),
        );
        break;
    }
  };

  const handleClick = () => {};

  return (
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

          <ConstructorMain list={list.constructorMain} />

          <Button onClick={handleClick} style={{ marginTop: 20 }}>
            Save
          </Button>
        </DivContainer>
        <ConstructorTools list={toolbar} />
      </DivContainer>
    </DragDropContext>
  );
}

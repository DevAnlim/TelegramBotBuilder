import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import ConstructorHeader from '../../components/ConstructorHeader';
import ConstructorTools from '../../components/ConstructorTools';
import DivContainer from '../../base/DivContainer';
import ConstructorMain from '../../components/ConstructorMain';
import Button from '../../base/Button';
import MessageCommandContainer from '../MessageCommandContainer';
import { updateList } from '../../redux/actions/bot';
import { saveChanges } from '../../http/bot';

export default function ConstructorContainer() {
  const [list, setList] = useState({ constructorMain: [] });
  const [index, setIndex] = useState(6);

  const scheme = useSelector(state => state.bot.list);
  const dispatch = useDispatch();

  const toolbar = [
    {
      id: 1,
      label: 'Command block',
      type: 'MESSAGE_COMMAND',
      values: { name: '', response: '' },
    },
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
    // console.log('==> dest', destination);

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

    // console.log('==> result', result);

    // dropped outside the list
    if (!destination) {
      return;
    }

    switch (source.droppableId) {
      case destination.droppableId:
        setList({
          [destination.droppableId]: reorder(
            list[source.droppableId],
            source.index,
            destination.index,
          ),
        });

        // dispatch(updateList(list.constructorMain));

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

  const handleClick = async () => {
    const response = await saveChanges(scheme);
  };

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

          {/* <ConstructorMain list={list.constructorMain} /> */}

          <ConstructorMain>
            {list.constructorMain.map(({ id, type }, index) => {
              switch (type) {
                case 'MESSAGE_COMMAND':
                  return <MessageCommandContainer id={id} index={index} />;
              }
            })}
          </ConstructorMain>

          <Button onClick={handleClick} style={{ marginTop: 20 }}>
            Save
          </Button>
        </DivContainer>
        <ConstructorTools list={toolbar} />
      </DivContainer>
    </DragDropContext>
  );
}

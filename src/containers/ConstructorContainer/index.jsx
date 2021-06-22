import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import ConstructorHeader from '../../components/ConstructorHeader';
import ConstructorTools from '../../components/ConstructorTools';
import ConstructorListItemContainer from '../ConstructorToolsItemContainer';
import DivContainer from '../../base/DivContainer';
import ConstructorMain from '../../components/ConstructorMain';
import Button from '../../base/Button';
import MessageCommandContainer from '../MessageCommandContainer';
import { updateList } from '../../redux/actions/bot';
import { initializeBot, saveChanges } from '../../http/bot';
import APIBlockContainer from '../APIBlockContainer';
import StartCommandContainer from '../StartCommandContainer';
import KeyboardBlockContainer from '../KeyboardBlockContainer';
import InlineKeyboardBlockContainer from '../InlineKeyboardBlockContainer';

export default function ConstructorContainer() {
  const [list, setList] = useState({ constructorMain: [] });
  const [reorderedScheme, setReorderedScheme] = useState([]);

  const scheme = useSelector(state => state.bot.list);

  const dispatch = useDispatch();

  useEffect(() => {
    setReorderedScheme(scheme);
  }, [scheme]);

  const toolbar = [
    {
      id: uuidv4(),
      label: 'Start command',
      description: 'Sets a response or action after executing command /start',
      type: 'START_COMMAND',
      values: { name: '', response: '' },
    },
    {
      id: uuidv4(),
      label: 'Message command',
      description: 'Sets a message or action after a command',
      type: 'MESSAGE_COMMAND',
      values: { name: '', response: '' },
    },
    {
      id: uuidv4(),
      label: 'API',
      description: 'Sets an API request',
      type: 'API_BLOCK',
      values: { name: '', response: '' },
    },

    {
      id: uuidv4(),
      label: 'Keyboard',
      description: 'Sets a keyboard menu',
      type: 'KEYBOARD',
      values: {
        buttonList: [],
      },
    },

    {
      id: uuidv4(),
      label: 'Inline keyboard',
      description: 'Sets an inline keyboard',
      type: 'INLINE_KEYBOARD',
      values: {
        buttonList: [],
      },
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

    destClone.splice(droppableDestination.index, 0, { ...item, id: uuidv4() });

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

        setReorderedScheme(
          reorder(reorderedScheme, source.index, destination.index),
        );

        console.log(reorderedScheme, scheme);

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
    const response = await saveChanges(reorderedScheme);
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
                case 'API_BLOCK':
                  return <APIBlockContainer id={id} index={index} />;

                case 'START_COMMAND':
                  return <StartCommandContainer id={id} index={index} />;

                case 'KEYBOARD':
                  return <KeyboardBlockContainer id={id} index={index} />;

                case 'INLINE_KEYBOARD':
                  return <InlineKeyboardBlockContainer id={id} index={index} />;
              }
            })}
          </ConstructorMain>

          <Button onClick={handleClick} style={{ marginTop: 20 }}>
            Save
          </Button>
        </DivContainer>
        <ConstructorTools>
          {toolbar.map(({ id, label, description }, index) => (
            <ConstructorListItemContainer
              id={id}
              index={index}
              label={label}
              description={description}
            />
          ))}
        </ConstructorTools>
      </DivContainer>
    </DragDropContext>
  );
}

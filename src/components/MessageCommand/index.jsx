import { Draggable } from 'react-beautiful-dnd';
import Label from '../../base/Label';
import InputCover from '../../base/InputCover';
import Input from '../../base/Input';
import InputGroup from '../../base/InputGroup';
import styles from './MessageCommand.module.scss';
import Title from '../../base/Title';

export default function MessageCommand({ id, index, values, onChange }) {
  return (
    <Draggable key={id} draggableId={`${id}`} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className={
              snapshot.isDragging
                ? `${styles['message-command']} ${styles['message-command_drag']}`
                : styles['message-command']
            }
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.draggableProps.style}
            {...provided.dragHandleProps}
          >
            <Title type="h3">Message command</Title>
            <InputGroup>
              <Label element="commandName">Name:</Label>
              <InputCover>
                <Input
                  type="text"
                  value={values.name}
                  onChange={onChange}
                  id="commandName"
                  name="name"
                />
              </InputCover>
            </InputGroup>

            <InputGroup>
              <Label element="commandResponse">Response:</Label>
              <InputCover>
                <Input
                  type="text"
                  value={values.response}
                  onChange={onChange}
                  id="commandResponse"
                  name="response"
                />
              </InputCover>
            </InputGroup>
          </div>
        );
      }}
    </Draggable>
  );
}

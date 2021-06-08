import { Draggable } from 'react-beautiful-dnd';
import Label from '../../base/Label';
import InputCover from '../../base/InputCover';
import Input from '../../base/Input';
import InputGroup from '../../base/InputGroup';
import styles from './StartCommand.module.scss';
import Title from '../../base/Title';

export default function StartCommand({ id, index, values, onChange }) {
  return (
    <Draggable key={id} draggableId={`${id}`} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className={
              snapshot.isDragging
                ? `${styles['start-command']} ${styles['start-command_drag']}`
                : styles['start-command']
            }
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.draggableProps.style}
            {...provided.dragHandleProps}
          >
            <Title type="h3">Start command</Title>

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

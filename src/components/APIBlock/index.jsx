import { Draggable } from 'react-beautiful-dnd';
import Label from '../../base/Label';
import InputCover from '../../base/InputCover';
import Input from '../../base/Input';
import InputGroup from '../../base/InputGroup';
import styles from './APIBlock.module.scss';
import Title from '../../base/Title';

export default function APIBlock({ id, index, values, onChange }) {
  return (
    <Draggable key={id} draggableId={`${id}`} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className={
              snapshot.isDragging
                ? `${styles['api-block']} ${styles['api-block_drag']}`
                : styles['api-block']
            }
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.draggableProps.style}
            {...provided.dragHandleProps}
          >
            <Title type="h3">API</Title>
            <InputGroup>
              <Label element={`entrance${id}`}>API entrance:</Label>
              <InputCover variant={styles['api-block__input']}>
                <Input
                  type="text"
                  value={values.entrance}
                  onChange={onChange}
                  id={`entrance${id}`}
                  name="entrance"
                />
              </InputCover>
            </InputGroup>

            <InputGroup>
              <Label element={`searchKey${id}`}>search key:</Label>
              <InputCover variant={styles['api-block__input']}>
                <Input
                  type="text"
                  value={values.query}
                  onChange={onChange}
                  id={`searchKey${id}`}
                  name="searchKey"
                />
              </InputCover>
            </InputGroup>

            <InputGroup>
              <Label element={`response${id}`}>Response:</Label>
              <InputCover variant={styles['api-block__input']}>
                <Input
                  type="text"
                  value={values.response}
                  onChange={onChange}
                  id={`response${id}`}
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

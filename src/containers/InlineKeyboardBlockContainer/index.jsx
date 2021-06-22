import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import InputContainer from '../../components/InputContainer';
import ConstructorBlock from '../../components/ConstructorBlock';
import Label from '../../base/Label';
import TelegramInputCover from '../../components/TelegramInputCover';
import Input from '../../base/Input';
import InputGroup from '../../base/InputGroup';
import Title from '../../base/Title';
import Divider from '../../base/Divider';
import DivContainer from '../../base/DivContainer';
import ConstructorButton from '../../components/ConstructorButton';
import { addItem, changeValue } from '../../redux/actions/bot';

export default function InlineKeyboardBlockContainer({ id, index }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    buttonList: [],
  });

  const { buttonList } = values;

  useEffect(() => {
    dispatch(
      addItem({
        id,
        values,
        label: 'Inline keyboard',
        type: 'INLINE_KEYBOARD',
      }),
    );
  }, []);

  const handleTextChange = event => {
    const { dataset, value } = event.target;

    buttonList.forEach(buttonListItem => {
      console.log(buttonListItem, dataset.id);
      if (buttonListItem.buttonId === dataset.id) {
        buttonListItem.text = value;
      }
    });

    setValues({ ...values, buttonList: [...buttonList] });

    dispatch(changeValue({ id, name: 'buttonList', value: [...buttonList] }));
  };

  const handleCallbackChange = event => {
    const { dataset, value } = event.target;

    buttonList.forEach(buttonListItem => {
      if (buttonListItem.buttonId === dataset.id) {
        buttonListItem.callback = value;
      }
    });

    setValues({ ...values, buttonList: [...buttonList] });

    dispatch(changeValue({ id, name: 'buttonList', value: [...buttonList] }));
  };

  const handleClick = () => {
    buttonList.push({
      buttonId: uuidv4(),
      text: '',
      callback: '',
    });

    setValues({ ...values, buttonList: [...buttonList] });
  };

  const handleRemove = id => {
    const idList = buttonList.map(({ buttonId }) => buttonId);
    const index = idList.indexOf(id);

    console.log(idList, index);

    if (index !== -1) {
      buttonList.splice(index, 1);
    }

    setValues({ ...values, buttonList: [...buttonList] });

    dispatch(changeValue({ id, name: 'buttonList', value: [...buttonList] }));
  };
  return (
    <ConstructorBlock
      id={id}
      index={index}
      style={{
        background: `linear-gradient(
            180deg,
            #ffffff -107.5%,
            rgba(255, 255, 255, 0) 100%
          ),
          #ff10ae`,
        background: '#347597',
      }}

      //75D19F
      //347597
    >
      <Title type="h3">Keyboard</Title>
      <Divider />

      {values.buttonList.map(({ buttonId, text, callback }) => (
        <InputContainer key={buttonId}>
          <InputGroup md>
            <Label element={`buttonText${buttonId}`}>Button text:</Label>
            <TelegramInputCover>
              <Input
                type="text"
                value={text}
                onChange={handleTextChange}
                id={`buttonText${buttonId}`}
                name={`buttonText${buttonId}`}
                data-id={buttonId}
                light
              />
            </TelegramInputCover>
          </InputGroup>

          <InputGroup sm>
            <Label element={`callbackId${buttonId}`}>Callback_id:</Label>
            <TelegramInputCover variant="secondary">
              <Input
                type="text"
                value={callback}
                onChange={handleCallbackChange}
                id={`callbackId${buttonId}`}
                name={`callbackId${buttonId}`}
                data-id={buttonId}
              />
            </TelegramInputCover>
          </InputGroup>

          <ConstructorButton
            remove
            sm
            onClick={() => {
              handleRemove(buttonId);
            }}
          />
        </InputContainer>
      ))}

      <DivContainer style={{ display: 'flex', justifyContent: 'center' }}>
        <ConstructorButton onClick={handleClick} />
      </DivContainer>
    </ConstructorBlock>
  );
}

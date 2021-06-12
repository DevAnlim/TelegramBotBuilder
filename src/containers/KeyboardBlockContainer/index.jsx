import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ConstructorBlock from '../../components/ConstructorBlock';
import Label from '../../base/Label';
import InputCover from '../../base/InputCover';
import Input from '../../base/Input';
import InputGroup from '../../base/InputGroup';
import Title from '../../base/Title';
import AddButton from '../../components/AddButton';
import { addItem, changeValue } from '../../redux/actions/bot';

export default function KeyboardBlockContainer({ id, index }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    buttonList: [],
  });

  useEffect(() => {
    dispatch(
      addItem({ id, values, label: 'Command block', type: 'API_BLOCK' }),
    );
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });

    dispatch(changeValue({ id, name, value }));
  };

  const handleClick = () => {};

  console.log(values);
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
      }}
    >
      <Title type="h3">Keyboard</Title>

      {valiues.buttonList.map(({ callbackId, text, callback }) => (
        <InputGroup key={callbackId}>
          <Label element={`entrance${callbackId}`}>API entrance:</Label>
          <InputCover>
            <Input
              type="text"
              value={values.entrance}
              onChange={handleChange}
              id={`entrance${callbackId}`}
              name=""
            />
          </InputCover>
        </InputGroup>
      ))}

      <AddButton onClick={handleClick} />
    </ConstructorBlock>
  );
}

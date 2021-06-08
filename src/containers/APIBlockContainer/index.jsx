import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ConstructorBlock from '../../components/ConstructorBlock';
import Label from '../../base/Label';
import InputCover from '../../base/InputCover';
import Input from '../../base/Input';
import InputGroup from '../../base/InputGroup';
import Title from '../../base/Title';
import { addItem, changeValue } from '../../redux/actions/bot';

export default function APIBlockContainer({ id, index }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    entrance: '',
    searchKey: '',
    response: '',
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
        #d67dff`,
      }}
    >
      <Title type="h3">API</Title>
      <InputGroup>
        <Label element={`entrance${id}`}>API entrance:</Label>
        <InputCover>
          <Input
            type="text"
            value={values.entrance}
            onChange={handleChange}
            id={`entrance${id}`}
            name="entrance"
          />
        </InputCover>
      </InputGroup>

      <InputGroup>
        <Label element={`searchKey${id}`}>search key:</Label>
        <InputCover>
          <Input
            type="text"
            value={values.query}
            onChange={handleChange}
            id={`searchKey${id}`}
            name="searchKey"
          />
        </InputCover>
      </InputGroup>

      <InputGroup>
        <Label element={`response${id}`}>Response:</Label>
        <InputCover>
          <Input
            type="text"
            value={values.response}
            onChange={handleChange}
            id={`response${id}`}
            name="response"
          />
        </InputCover>
      </InputGroup>
    </ConstructorBlock>
  );
}

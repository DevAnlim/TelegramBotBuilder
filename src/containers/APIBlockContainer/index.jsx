import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ConstructorBlock from '../../components/ConstructorBlock';
import InputContainer from '../../components/InputContainer';
import Label from '../../base/Label';
import InputCover from '../../base/InputCover';
import Input from '../../base/Input';
import InputGroup from '../../base/InputGroup';
import Title from '../../base/Title';
import Divider from '../../base/Divider';
import DivContainer from '../../base/DivContainer';
import ConstructorButton from '../../components/ConstructorButton';
import { addItem, changeValue } from '../../redux/actions/bot';

export default function APIBlockContainer({ id, index }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    entrance: '',
    entry: '',
    variableList: [{ varId: uuidv4(), variable: '', key: '' }],
  });

  const { variableList } = values;

  useEffect(() => {
    dispatch(
      addItem({ id, values, label: 'Command block', type: 'API_BLOCK' }),
    );
  }, []);

  const handleClick = () => {
    variableList.push({
      varId: uuidv4(),
      variable: '',
      key: '',
    });

    setValues({ ...values, variableList: [...variableList] });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });

    dispatch(changeValue({ id, name, value }));
  };

  const handleVariableChange = event => {
    const { dataset, value } = event.target;

    variableList.forEach(variableListItem => {
      if (variableListItem.varId === dataset.id) {
        variableListItem.variable = value;
      }
    });

    setValues({ ...values, variableList: [...variableList] });

    dispatch(
      changeValue({ id, name: 'variableList', value: [...variableList] }),
    );
  };

  const handleKeyChange = event => {
    const { dataset, value } = event.target;

    variableList.forEach(variableListItem => {
      if (variableListItem.varId === dataset.id) {
        variableListItem.key = value;
      }
    });

    setValues({ ...values, variableList: [...variableList] });

    dispatch(
      changeValue({ id, name: 'variableList', value: [...variableList] }),
    );
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
        #d67dff`,
      }}
    >
      <Title type="h3">API</Title>
      <Divider />
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
        <Label element={`entry${id}`}>JSON entry:</Label>
        <InputCover>
          <Input
            type="text"
            value={values.entry}
            onChange={handleChange}
            id={`entry${id}`}
            name="entry"
          />
        </InputCover>
      </InputGroup>

      {variableList.map(({ varId, variable, key }) => (
        <InputContainer key={varId}>
          <InputGroup md>
            <Label element={`variable${id}`}>Variable name:</Label>
            <InputCover>
              <Input
                type="text"
                value={variable}
                onChange={handleVariableChange}
                id={`variable${id}`}
                name="variable"
                data-id={varId}
              />
            </InputCover>
          </InputGroup>

          <InputGroup md>
            <Label element={`searchKey${id}`}>Key name:</Label>
            <InputCover>
              <Input
                type="text"
                value={key}
                onChange={handleKeyChange}
                id={`searchKey${id}`}
                name="key"
                data-id={varId}
              />
            </InputCover>
          </InputGroup>
        </InputContainer>
      ))}

      <DivContainer style={{ display: 'flex', justifyContent: 'center' }}>
        <ConstructorButton onClick={handleClick} />
      </DivContainer>
    </ConstructorBlock>
  );
}

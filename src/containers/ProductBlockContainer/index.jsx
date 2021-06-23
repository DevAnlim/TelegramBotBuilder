import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ConstructorBlock from '../../components/ConstructorBlock';
import Label from '../../base/Label';
import InputContainer from '../../components/InputContainer';
import InputCover from '../../base/InputCover';
import Input from '../../base/Input';
import InputGroup from '../../base/InputGroup';
import Title from '../../base/Title';
import Divider from '../../base/Divider';
import { addItem, changeValue } from '../../redux/actions/bot';

export default function ProductBlockContainer({ id, index }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    img: '',
    title: { id: uuidv4(), value: '', variable: '' },
    description: { id: uuidv4(), value: '', variable: '' },
  });

  useEffect(() => {
    dispatch(
      addItem({ id, values, label: 'Product Block', type: 'PRODUCT_BLOCK' }),
    );
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });

    console.log(values);
    dispatch(changeValue({ id, name, value }));
  };

  const handleTitleChange = event => {
    const { name, value } = event.target;

    const titleValue = values.title;
    titleValue[name] = value;

    setValues({ ...values, title: titleValue });

    dispatch(changeValue({ id, name: 'title', value: titleValue }));
  };

  const handleDescriptionChange = event => {
    const { name, value } = event.target;

    const descriptionValue = values.description;
    descriptionValue[name] = value;

    setValues({
      ...values,
      description: descriptionValue,
    });

    dispatch(changeValue({ id, name: 'description', value: descriptionValue }));
  };

  return (
    <ConstructorBlock id={id} index={index}>
      <Title type="h3">Product block</Title>
      <Divider />

      <InputGroup>
        <Label element={`image${id}`}>Image variable:</Label>
        <InputCover>
          <Input
            type="text"
            value={values.img}
            onChange={handleChange}
            id={`image${id}`}
            name="img"
          />
        </InputCover>
      </InputGroup>
      <InputContainer>
        <InputGroup md>
          <Label element={`title${id}`}>Title:</Label>
          <InputCover>
            <Input
              type="text"
              value={values.title.value}
              onChange={handleTitleChange}
              id={`title${id}`}
              name="value"
            />
          </InputCover>
        </InputGroup>

        <InputGroup md>
          <Label element={`variable${id}`}>Variable name:</Label>
          <InputCover>
            <Input
              type="text"
              value={values.title.variable}
              onChange={handleTitleChange}
              id={`variable${id}`}
              name="variable"
            />
          </InputCover>
        </InputGroup>
      </InputContainer>

      <InputContainer>
        <InputGroup md>
          <Label element={`title${id}`}>Description:</Label>
          <InputCover>
            <Input
              type="text"
              value={values.description.value}
              onChange={handleDescriptionChange}
              id={`title${id}`}
              name="value"
            />
          </InputCover>
        </InputGroup>

        <InputGroup md>
          <Label element={`variable${id}`}>Variable name:</Label>
          <InputCover>
            <Input
              type="text"
              value={values.description.variable}
              onChange={handleDescriptionChange}
              id={`variable${id}`}
              name="variable"
            />
          </InputCover>
        </InputGroup>
      </InputContainer>
    </ConstructorBlock>
  );
}

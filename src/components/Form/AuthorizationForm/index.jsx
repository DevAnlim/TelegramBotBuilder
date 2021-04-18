import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Card from '../../base/Card';
import FormHeader from '../FormHeader';
import Form from '../../base/Form';
import Label from '../../base/Label';
import InputCover from '../../base/InputCover';
import Input from '../../base/Input';
import InputGroup from '../../base/InputGroup';
import Button from '../../base/Button';
import DivContainer from '../../base/DivContainer';
import createBot from '../../../actions/createBot';

export default function AuthorizationForm({}) {
  const [forms, setForms] = useState({
    selected: { id: 0, name: 'Sign In' },
    list: [
      { id: 0, name: 'Sign In' },
      { id: 1, name: 'Sign Up' },
    ],
  });

  // const dispatch = useDispatch();

  return (
    <Card>
      <FormHeader
        options={forms.list}
        activeId={forms.selected.id}
        onClick={id => {
          const selected = forms.list.filter(item => item.id === id);
          setForms({ ...forms, selected: selected[0] });
        }}
      />
      <Form>
        <InputGroup>
          <Label>User name:</Label>
          <InputCover>
            <Input type="text" value="" onChange={() => {}} />
          </InputCover>
        </InputGroup>

        <InputGroup>
          <Label>Email:</Label>
          <InputCover>
            <Input type="email" value="" onChange={() => {}} />
          </InputCover>
        </InputGroup>

        <InputGroup>
          <Label>Password:</Label>
          <InputCover>
            <Input type="password" value="" onChange={() => {}} />
          </InputCover>
        </InputGroup>

        <DivContainer
          style={{
            width: 100 + '%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            onClick={() => {
              // dispatch({ type: 'CREATE', payload: {} });
              createBot();
            }}
          >
            Sign Up
          </Button>
        </DivContainer>
      </Form>
    </Card>
  );
}

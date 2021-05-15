import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Card from '../../../base/Card';
import FormHeader from '../../../components/FormHeader';
import Form from '../../../base/Form';
import Label from '../../../base/Label';
import InputCover from '../../../base/InputCover';
import Input from '../../../base/Input';
import InputGroup from '../../../base/InputGroup';
import Button from '../../../base/Button';
import DivContainer from '../../../base/DivContainer';
import createBot from '../../../actions/createBot';

export default function AuthorizationForm({}) {
  const [forms, setForms] = useState({
    selected: { id: 0, name: 'Sign In' },
    list: [
      { id: 0, name: 'Sign In', errors: [], email: '', password: '' },
      {
        id: 1,
        name: 'Sign Up',
        errors: [{}],
        username: '',
        email: '',
        password: '',
      },
    ],
  });

  const validateEmail = value => {
    if (/^\@+\s+$/.test(value)) {
    }
  };

  // const dispatch = useDispatch();

  return (
    <Card
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 500,
      }}
      adaptive
    >
      <FormHeader
        options={forms.list}
        activeId={forms.selected.id}
        onClick={id => {
          const selected = forms.list.filter(item => item.id === id);
          setForms({ ...forms, selected: selected[0] });
        }}
      />

      {forms.selected.id ? (
        <Form>
          <InputGroup>
            <Label element="username">User name:</Label>
            <InputCover>
              <Input type="text" value="" onChange={() => {}} id="username" />
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
              marginTop: 20,
            }}
          >
            <Button
              onClick={() => {
                // dispatch({ type: 'CREATE', payload: {} });
                createBot();
              }}
              adaptive
            >
              Sign Up
            </Button>
          </DivContainer>
        </Form>
      ) : (
        <Form>
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
              marginTop: 20,
            }}
          >
            <Button
              onClick={() => {
                // dispatch({ type: 'CREATE', payload: {} });
                createBot();
              }}
              adaptive
            >
              Sign In
            </Button>
          </DivContainer>
        </Form>
      )}
    </Card>
  );
}

import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Card from '../../../base/Card';
import FormHeader from '../../../components/FormHeader';
import Form from '../../../base/Form';
import Label from '../../../base/Label';
import InputCover from '../../../base/InputCover';
import Input from '../../../base/Input';
import InputGroup from '../../../base/InputGroup';
import Button from '../../../base/Button';
import DivContainer from '../../../base/DivContainer';
import Error from '../../../base/Error';
import createBot from '../../../actions/createBot';
import { signUp, signIn } from '../../../http/authorization';

export default function AuthorizationForm({}) {
  const router = useRouter();

  const [selected, setSelected] = useState({
    id: 0,
    name: 'Sign In',
    error: null,
    email: '',
    password: '',
  });

  const forms = [
    { id: 0, name: 'Sign In', error: null, email: '', password: '' },
    {
      id: 1,
      name: 'Sign Up',
      error: null,
      userName: '',
      email: '',
      password: '',
    },
  ];

  const handleSubmit = async () => {
    let response = null;

    if (selected.id) {
      response = await signUp(selected);
    } else {
      response = await signIn(selected);
    }

    if (!response.data.ok && response.data.message) {
      setSelected({
        ...selected,
        error: response.data.message,
      });
    } else {
      router.replace('/');
    }
  };

  const switchForms = id => {
    const selectedForm = forms.filter(item => item.id === id);

    setSelected(selectedForm[0]);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setSelected({ ...selected, [name]: value });
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
        options={forms}
        activeId={selected.id}
        onClick={id => {
          switchForms(id);
        }}
      />

      {/* {selected.id ? ( */}
      <Form>
        {selected.id ? (
          <>
            <InputGroup>
              <Label element="userName">User name:</Label>
              <InputCover>
                <Input
                  type="text"
                  value={selected.userName}
                  onChange={handleChange}
                  id="userName"
                  name="userName"
                />
              </InputCover>
            </InputGroup>

            <InputGroup>
              <Label>Email:</Label>
              <InputCover>
                <Input
                  type="email"
                  value={selected.email}
                  name="email"
                  onChange={handleChange}
                />
              </InputCover>
            </InputGroup>

            <InputGroup>
              <Label>Password:</Label>
              <InputCover>
                <Input
                  type="password"
                  value={selected.password}
                  onChange={handleChange}
                  name="password"
                />
              </InputCover>
            </InputGroup>
          </>
        ) : (
          <>
            <InputGroup>
              <Label>Email:</Label>
              <InputCover>
                <Input
                  type="email"
                  value={selected.email}
                  name="email"
                  onChange={handleChange}
                />
              </InputCover>
            </InputGroup>

            <InputGroup>
              <Label>Password:</Label>
              <InputCover>
                <Input
                  type="password"
                  value={selected.password}
                  onChange={handleChange}
                  name="password"
                />
              </InputCover>
            </InputGroup>
          </>
        )}
        <DivContainer
          style={{
            width: 100 + '%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Button onClick={handleSubmit} adaptive>
            {selected.id ? ' Sign up' : 'Sign in'}
          </Button>
        </DivContainer>
      </Form>

      {selected.error && <Error>{selected.error}</Error>}
    </Card>
  );
}

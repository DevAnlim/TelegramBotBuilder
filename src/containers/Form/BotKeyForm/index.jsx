import Link from 'next/link';
import Card from '../../../base/Card';
import Form from '../../../base/Form';
import Label from '../../../base/Label';
import InputCover from '../../../base/InputCover';
import Input from '../../../base/Input';
import InputGroup from '../../../base/InputGroup';
import Button from '../../../base/Button';
import DivContainer from '../../../base/DivContainer';
import { useState } from 'react';
import Title from '../../../base/Title';
import Text from '../../../base/Text';
import { initializeBot } from '../../../http/bot';

export default function BotKeyForm() {
  const [inputValue, setInputValue] = useState('');

  const commonStyles = {
    headerStyles: {
      width: '100%',
      height: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: `linear-gradient(
        180deg,
        #ffffff 0,
        rgba(255, 255, 255, 0) 100%
      ),
      #fffa76`,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },

    marginY: {
      margin: '0 10px',
    },

    link: {
      color: '#ff10ae',
    },
    wrapper: {
      marginTop: 20,
      display: 'flex',
      justifyContent: 'center',
    },
  };

  const handleClick = async () => {
    const response = await initializeBot({
      token: inputValue,
      scheme: [
        {
          id: 0,
          type: 'START',
          payload: { message: 'hey dude, it works fine' },
        },
        {
          id: 1,
          type: 'ON',
          payload: { message: '👍🏿', event: 'sticker' },
        },

        {
          id: 2,
          type: 'HEARS',
          payload: { message: 'are you alive', event: 'Yep' },
        },
      ],
    });

    console.log(response);
  };

  return (
    <Card>
      <DivContainer style={commonStyles.headerStyles}>
        Create a new bot
      </DivContainer>
      <Form>
        <InputGroup>
          <Label element="apiKeyInput">BotFather API key:</Label>

          <InputCover>
            <Input
              value={inputValue}
              onChange={event => {
                setInputValue(event.target.value);
              }}
            />
          </InputCover>
        </InputGroup>

        <Title type="h6">Description</Title>

        <Text type="p" description>
          In order to create your bot the BotFather API key is required.
        </Text>

        <Text type="p" description style={commonStyles.marginY}>
          To generate API key you need to go to
          <Link href="https://t.me/BotFather">
            <a style={commonStyles.link}> https://t.me/BotFather </a>
          </Link>
          and follow the instructions.
        </Text>

        <Text type="p" description>
          After you receive the API key come back to us and paste it to the
          field and press “Continue”.
        </Text>

        <DivContainer style={commonStyles.wrapper}>
          <Button onClick={handleClick}>Continue</Button>
        </DivContainer>
      </Form>
    </Card>
  );
}

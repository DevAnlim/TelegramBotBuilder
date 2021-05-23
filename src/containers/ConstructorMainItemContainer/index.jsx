import { useState } from 'react';
import Input from '../../base/Input';

export default function ConstructorMainItemContainer({ value }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  return <Input type="text" value={inputValue} onChange={handleChange} />;
}

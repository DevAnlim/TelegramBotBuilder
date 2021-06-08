import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import StartCommand from '../../components/StartCommand';
import { addItem, changeValue } from '../../redux/actions/bot';

export default function StartCommandContainer({ id, index }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    command: '',
    response: '',
  });

  useEffect(() => {
    dispatch(
      addItem({ id, values, label: 'Start command', type: 'START_COMMAND' }),
    );
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });

    dispatch(changeValue({ id, name, value }));
  };

  return (
    <StartCommand
      id={id}
      index={index}
      values={values}
      onChange={handleChange}
    />
  );
}

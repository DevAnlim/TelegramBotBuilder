import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MessageCommand from '../../components/MessageCommand';
import { addItem, changeValue } from '../../redux/actions/bot';

export default function MessageCommandContainer({ id, index }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: '',
    response: '',
  });

  useEffect(() => {
    dispatch(
      addItem({ id, values, label: 'Command block', type: 'MESSAGE_COMMAND' }),
    );
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });

    dispatch(changeValue({ id, name, value }));
  };

  return (
    <MessageCommand
      id={id}
      index={index}
      values={values}
      onChange={handleChange}
    />
  );
}

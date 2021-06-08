import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import APIBlock from '../../components/APIBlock';
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
    <APIBlock id={id} index={index} values={values} onChange={handleChange} />
  );
}

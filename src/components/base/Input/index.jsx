import { PropTypes } from 'prop-types';
import styles from './Input.module.scss';

export default function Input({
  value,
  onChange,
  type,
  placeholder,
  ...props
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      className={styles.input}
      {...props}
    />
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

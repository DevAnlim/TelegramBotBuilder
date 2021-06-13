import { PropTypes } from 'prop-types';
import styles from './InputContainer.module.scss';

export default function InputContainer({ children }) {
  return <div className={styles['input-container']}>{children}</div>;
}

InputContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(Array),
    PropTypes.elementType,
  ]).isRequired,
};

import { PropTypes } from 'prop-types';
import styles from './InputGroup.module.scss';

export default function InputGroup({ children }) {
  return <div className={styles['input-group']}>{children}</div>;
}

InputGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.instanceOf(Array),
  ]).isRequired,
};

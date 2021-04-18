import { PropTypes } from 'prop-types';
import styles from './InputCover.module.scss';

export default function InputCover({ children }) {
  return <div className={styles['input-cover']}>{children}</div>;
}

InputCover.propTypes = {
  children: PropTypes.elementType.isrequired,
};

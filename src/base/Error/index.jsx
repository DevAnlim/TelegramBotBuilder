import { PropTypes } from 'prop-types';
import styles from './Error.module.scss';

export default function Error({ children }) {
  return <span className={styles.error}>{children}</span>;
}

Error.propTypes = {
  children: PropTypes.elementType.isRequired,
};

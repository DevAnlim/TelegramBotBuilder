import { PropTypes } from 'prop-types';
import styles from './Error.module.scss';

export default function Error({ message }) {
  return <span className={styles.error}>{message}</span>;
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

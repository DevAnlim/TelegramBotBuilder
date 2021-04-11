import { PropTypes } from 'prop-types';
import styles from './Label.module.scss';

export default function Label({ children, element }) {
  return (
    <label className={styles.label} htmlFor={element}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.elementType.isRequire,
  element: PropTypes.string.isRequired,
};

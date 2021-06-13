import { PropTypes } from 'prop-types';
import styles from './Label.module.scss';

export default function Label({ children, light, element }) {
  return (
    <label
      className={`${styles.label} ${light && styles.label_light}`}
      htmlFor={element}
    >
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.elementType.isRequired,
  element: PropTypes.string.isRequired,
};

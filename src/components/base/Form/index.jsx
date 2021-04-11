import { PropTypes } from 'prop-types';
import styles from './Form.module.scss';

export default function Form({ children, style }) {
  return (
    <form className={styles.form} style={style}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType.isRequired,
    PropTypes.instanceOf(Array).isRequired,
  ]),
};

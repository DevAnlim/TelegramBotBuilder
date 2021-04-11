import { PropTypes } from 'prop-types';
import styles from './Button.module.scss';

export default function Button({ children, type, onClick, style }) {
  return (
    <button
      className={styles.button}
      type={type}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  style: {},
};

Button.propTypes = {
  children: PropTypes.elementType.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
};

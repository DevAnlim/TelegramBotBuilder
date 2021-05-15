import { PropTypes } from 'prop-types';
import styles from './Card.module.scss';

export default function Card({ children, adaptive, style }) {
  return (
    <div
      className={`${styles.card} ${adaptive && styles.card_adaptive}`}
      style={style}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  style: {},
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType.isRequired,
    PropTypes.instanceOf(Array),
  ]),
  style: PropTypes.instanceOf(Object),
};

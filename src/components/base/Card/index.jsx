import { PropTypes } from 'prop-types';
import styles from './Card.module.scss';

export default function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType.isRequired,
    PropTypes.instanceOf(Array),
  ]),
};

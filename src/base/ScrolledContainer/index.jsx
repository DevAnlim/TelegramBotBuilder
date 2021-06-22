import { PropTypes } from 'prop-types';
import styles from './ScrolledContainer.module.scss';

export default function ScrolledContainer({ children }) {
  return <div className={styles['scrolled-container']}>{children}</div>;
}

ScrolledContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.instanceOf(Array),
  ]).isRequired,
};

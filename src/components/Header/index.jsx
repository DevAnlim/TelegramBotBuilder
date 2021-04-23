import styles from './Header.module.scss';
import { PropTypes } from 'prop-types';

export default function Header({ children }) {
  return <header className={styles.header}>{children}</header>;
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType.isRequired,
    PropTypes.instanceOf(Object).isRequired,
  ]),
};

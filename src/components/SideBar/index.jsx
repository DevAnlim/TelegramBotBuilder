import { PropTypes } from 'prop-types';
import styles from './SideBar.module.scss';

export default function SideBar({ isOpen, children }) {
  return (
    <div
      className={
        isOpen ? `${styles.sidebar} ${styles.sidebar_active}` : styles.sidebar
      }
    >
      <div className={styles['sidebar-list']}>{children}</div>
    </div>
  );
}

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequire,
  children: PropTypes.elementType.isRequired,
};

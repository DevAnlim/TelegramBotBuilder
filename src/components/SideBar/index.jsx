import styles from './SideBar.module.scss';
import { PropTypes } from 'prop-types';

export default function SideBar({ isOpen, children }) {
  return (
    isOpen && (
      <div className={styles.sidebar}>
        <div className={(styles = ['sidebar-list'])}>{children}</div>
      </div>
    )
  );
}

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequire,
  children: PropTypes.elementType.isRequired,
};

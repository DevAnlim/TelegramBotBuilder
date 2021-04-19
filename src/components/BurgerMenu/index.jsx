import { PropTypes } from 'prop-types';
import styles from './BurgerMenu.module.scss';

export default function BurgerMenu({ isOpen, onClick }) {
  return (
    <div className={styles.burger} onClick={onClick}>
      <span
        className={
          isOpen
            ? `${styles.burger__item} ${styles.burger__item_active}`
            : styles.burger__item
        }
      />
    </div>
  );
}

BurgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

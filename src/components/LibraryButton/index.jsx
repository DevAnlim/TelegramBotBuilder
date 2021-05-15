import { PropTypes } from 'prop-types';
import styles from './LibraryButton.module.scss';

export default function LibraryButton({ onClick }) {
  return (
    <div className={styles['library-button']} onClick={onClick}>
      <span className={styles['library-button__item']} />
    </div>
  );
}

LibraryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

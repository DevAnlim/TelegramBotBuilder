import { PropTypes } from 'prop-types';
import styles from './LibraryItem.module.scss';

export default function LibraryItem({ color, name }) {
  return (
    <div className={styles.library__item} style={{ background: color }}>
      {name}
    </div>
  );
}

LibraryItem.defaultProps = {
  color: 'fff',
};

LibraryItem.propTypes = {
  color: PropTypes.string,
};

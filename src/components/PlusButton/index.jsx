import { PropTypes } from 'prop-types';
import styles from './PlusButton.module.scss';

export default function PlusButton({ onClick, src, style }) {
  return (
    <div className={styles['plus-button']} onClick={onClick} style={style}>
      {src ? (
        <img src={src} alt="" className={styles['plus-button__img']} />
      ) : (
        <span className={styles['plus-button__item']} />
      )}
    </div>
  );
}

PlusButton.defaultProps = {
  img: null,
  style: {},
};

PlusButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

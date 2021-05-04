import { PropTypes } from 'prop-types';
import styles from './Title.module.scss';

export default function Title({ type, children, style }) {
  switch (type) {
    case 'h1':
      return (
        <h1 className={styles.title} style={style}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={styles.title} style={style}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={styles.title} style={style}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={styles.title} style={style}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={styles.title} style={style}>
          {children}
        </h5>
      );

    default:
      return (
        <h1 className={styles.title} style={style}>
          {children}
        </h1>
      );
  }
}

Title.defaultProps = {
  type: 'h1',
  style: {},
};

Title.propTypes = {
  children: PropTypes.elementType.isRequired,
  type: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

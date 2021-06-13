import { PropTypes } from 'prop-types';
import styles from './InputCover.module.scss';

export default function InputCover({ children, variant, style }) {
  return (
    <div className={`${styles['input-cover']} ${variant}`} style={style}>
      {children}
    </div>
  );
}

InputCover.defaultProps = {
  variant: '',
  styles: {},
};

InputCover.propTypes = {
  children: PropTypes.elementType.isrequired,
  vartiant: PropTypes.instanceOf(Object),
  styles: PropTypes.instanceOf(Object),
};

import { PropTypes } from 'prop-types';
import styles from './InputCover.module.scss';

export default function InputCover({ children, variant }) {
  return (
    <div className={`${styles['input-cover']} ${variant}`}>{children}</div>
  );
}

InputCover.defaultProps = {
  variant: '',
};

InputCover.propTypes = {
  children: PropTypes.elementType.isrequired,
  vartiant: PropTypes.instanceOf(Object),
};

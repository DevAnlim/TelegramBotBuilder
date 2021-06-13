import { PropTypes } from 'prop-types';
import styles from './TelegramInputCover.module.scss';

export default function TelegramInputCover({ children, variant, style }) {
  return (
    <div
      className={`${styles['telegram-input-cover']} ${
        variant === 'secondary' && styles['telegram-input-cover_secondary']
      }`}
      style={style}
    >
      {children}
    </div>
  );
}

TelegramInputCover.defaultProps = {
  variant: '',
  styles: {},
};

TelegramInputCover.propTypes = {
  children: PropTypes.elementType.isrequired,
  vartiant: PropTypes.instanceOf(Object),
  styles: PropTypes.instanceOf(Object),
};

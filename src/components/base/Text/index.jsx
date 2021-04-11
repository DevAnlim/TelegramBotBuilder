import { PropTypes } from 'prop-types';
import styles from './Text.module.scss';

export default function Text({ type, bold, description, children }) {
  switch (type) {
    case 'span':
      return (
        <span
          className={`${description ? styles.text_description : styles.text} ${
            bold ? styles.text_bold : ''
          }`}
        >
          {children}
        </span>
      );

    case 'p':
      return (
        <p
          className={`${description ? styles.text_description : styles.text} ${
            bold ? styles.text_bold : ''
          }`}
        >
          {children}
        </p>
      );

    default:
      return (
        <span
          className={`${description ? styles.text_description : styles.text} ${
            bold ? styles.text_bold : ''
          }`}
        >
          {children}
        </span>
      );
  }
}

Text.defaultProps = {
  type: '',
  bold: false,
  description: false,
};

Text.propTypes = {
  type: PropTypes.string,
  bold: PropTypes.bool,
  description: PropTypes.bool,
  children: PropTypes.elementType.isRequired,
};

import { PropTypes } from 'prop-types';
import styles from './Text.module.scss';

export default function Text({ type, bold, description, children, style }) {
  switch (type) {
    case 'span':
      return (
        <span
          className={`${description ? styles.text_description : styles.text} ${
            bold ? styles.text_bold : ''
          }`}
          style={style}
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

    case 'a':
      return (
        <a
          className={`${styels.text_white} ${
            description ? styles.text_description : styles.text
          } ${bold ? styles.text_bold : ''}`}
        >
          {children}
        </a>
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
  style: {},
};

Text.propTypes = {
  type: PropTypes.string,
  bold: PropTypes.bool,
  description: PropTypes.bool,
  children: PropTypes.elementType.isRequired,
  style: PropTypes.instanceOf(Object),
};

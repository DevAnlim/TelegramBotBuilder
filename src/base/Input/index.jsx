import { PropTypes } from 'prop-types';
import styles from './Input.module.scss';

export default function Input({
  value,
  onChange,
  type,
  placeholder,
  style,
  light,
  lg,
  md,
  sm,

  ...props
}) {
  return (
    <input
      value={value}
      onChange={event => {
        onChange(event);
      }}
      className={`${styles.input} ${light && styles.input_light} ${
        lg && styles.input_lg
      } ${md && styles.input_md} ${sm && styles.input_sm}`}
      type={type}
      placeholder={placeholder}
      style={style}
      {...props}
    />
  );
}

Input.defaultProps = {
  placeholder: '',
  styles: {},
  light: false,
};

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isrequired,
  type: PropTypes.string.isrequired,
  placeholder: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  light: PropTypes.bool,
};

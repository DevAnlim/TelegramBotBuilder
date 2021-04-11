import { PropTypes } from 'prop-types';

export default function DivContainer({ children, style }) {
  return <div style={style}>{children}</div>;
}

DivContainer.defaultProps = {
  style: '',
};

DivContainer.propTypes = {
  children: PropTypes.elementType.isRequired,
  style: PropTypes.instanceOf(Object),
};

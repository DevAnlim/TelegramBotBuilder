import { PropTypes } from 'prop-types';
import styles from './InputGroup.module.scss';

export default function InputGroup({ children, sm, md, lg }) {
  return (
    <div
      className={`${styles['input-group']} ${sm && styles['input-group_sm']} ${
        md && styles['input-group_md']
      } ${lg && styles['input-group_lg']}`}
    >
      {children}
    </div>
  );
}

InputGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.instanceOf(Array),
  ]).isRequired,
};

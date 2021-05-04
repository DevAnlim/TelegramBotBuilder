import { PropTypes } from 'prop-types';
import LibraryItem from '../LibraryItem';
import styles from './Library.module.scss';

export default function Library({ list }) {
  return (
    <div className={styles.library}>
      {list?.map(({ id, color, name }) => (
        <LibraryItem key={id} color={color} name={name} />
      ))}
    </div>
  );
}

Library.defaultProps = {
  list: [],
};

Library.propTypes = {
  list: PropTypes.instanceOf(Array),
};

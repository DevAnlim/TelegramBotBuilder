import { PropTypes } from 'prop-types';
import ToolsList from '../ToolsList';
import LibraryItem from '../LibraryItem';
import styles from './Library.module.scss';

export default function Library({ list }) {
  return (
    <ToolsList
      id="botList"
      className={styles.library}
      classNameDrag={styles.library_dragged}
      type="dashboard"
      direction="horizontal"
    >
      {list?.map(({ id, name }, index) => (
        <LibraryItem
          key={id}
          id={id}
          index={index}
          color={'white'}
          name={name}
        />
      ))}
    </ToolsList>
  );
}

Library.defaultProps = {
  list: [],
};

Library.propTypes = {
  list: PropTypes.instanceOf(Array),
};

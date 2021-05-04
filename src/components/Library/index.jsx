import { PropTypes } from 'prop-types';
import ToolsList from '../ToolsList';
import LibraryItem from '../LibraryItem';
import styles from './Library.module.scss';
import shuffle from '../../utils/shuffle';
import colors from '../../utils/colors';
import LibraryButton from '../LibraryButton';

export default function Library({ list }) {
  return (
    <ToolsList
      id="botList"
      className={styles.library}
      classNameDrag={styles.library_dragged}
      type="dashboard"
      direction="horizontal"
    >
      <div className={`${styles['library-container']} custom-scroll`}>
        {list?.map(({ id, name }, index) => (
          <LibraryItem
            key={id}
            id={id}
            index={index}
            color={shuffle(colors)}
            name={name}
          />
        ))}
      </div>

      <LibraryButton />
    </ToolsList>
  );
}

Library.defaultProps = {
  list: [],
};

Library.propTypes = {
  list: PropTypes.instanceOf(Array),
};

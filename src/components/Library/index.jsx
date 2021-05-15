import { PropTypes } from 'prop-types';
import ToolsList from '../ToolsList';
import LibraryItem from '../LibraryItem';
import styles from './Library.module.scss';
import LibraryButton from '../LibraryButton';

export default function Library({ list, onClick }) {
  return (
    <ToolsList
      id="botList"
      className={styles.library}
      classNameDrag={styles.library_dragged}
      type="dashboard"
      direction="horizontal"
    >
      <div className={`${styles['library-container']} custom-scroll`}>
        {list?.map(({ id, name, color }, index) => (
          <LibraryItem
            key={id}
            id={id}
            index={index}
            color={color}
            name={name}
          />
        ))}
      </div>

      <LibraryButton onClick={onClick} />
    </ToolsList>
  );
}

Library.defaultProps = {
  list: [],
};

Library.propTypes = {
  list: PropTypes.instanceOf(Array),
  onClick: PropTypes.func.isRequired,
};

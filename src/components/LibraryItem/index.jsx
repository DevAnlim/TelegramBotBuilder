import { PropTypes } from 'prop-types';
import ToolsListItem from '../ToolsListItem';
import styles from './LibraryItem.module.scss';

export default function LibraryItem({ id, index, color, name }) {
  return (
    <ToolsListItem
      id={id}
      index={index}
      className={styles.library__item}
      classNameDrag={styles.library__item_dragged}
      style={{ background: color }}
    >
      {name}
    </ToolsListItem>
  );
}

LibraryItem.defaultProps = {
  color: '#fff',
};

LibraryItem.propTypes = {
  color: PropTypes.string,
};

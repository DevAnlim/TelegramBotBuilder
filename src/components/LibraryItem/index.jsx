import { PropTypes } from 'prop-types';
import ToolsListItem from '../ToolsListItem';
import styles from './LibraryItem.module.scss';

export default function LibraryItem({ id, index, color, name }) {
  return (
    <ToolsListItem
      id={id}
      index={index}
      variant={styles.library__item}
      variantDrag={styles.library__item_dragged}
      style={{
        background: `linear-gradient(
        180deg,
        #ffffff 0,
        rgba(255, 255, 255, 0) 100%
      ),
      ${color}`,
      }}
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

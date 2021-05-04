import { PropTypes } from 'prop-types';
import ToolsList from '../ToolsList';
import ToolsListItem from '../ToolsListItem';
import styles from './ConstructorMain.module.scss';

export default function ConstructorMain({ list }) {
  return (
    <ToolsList
      id="constructorMain"
      className={styles['constructor-main-list']}
      classNameDrag={styles['constructor-main-list_dragged']}
      type="OPTIONS"
    >
      {list?.map(({ id, label }, index) => (
        <ToolsListItem
          id={id}
          index={index}
          className={styles['constructor-main-list__item']}
          classNameDrag={styles['constructor-main-list__item_dragged']}
        >
          {label}
        </ToolsListItem>
      ))}
    </ToolsList>
  );
}

ConstructorMain.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
};

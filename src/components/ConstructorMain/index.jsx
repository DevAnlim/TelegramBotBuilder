import { PropTypes } from 'prop-types';
import ConstructorMainItemContainer from '../../containers/ConstructorMainItemContainer';
import ConstructorMainItem from '../ConstructorMainItem';
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
        <ConstructorMainItem
          id={id}
          index={index}
          variant={styles['constructor-main-list__item']}
          variantDrag={styles['constructor-main-list__item_dragged']}
        >
          <ConstructorMainItemContainer value={label} />
        </ConstructorMainItem>
      ))}
    </ToolsList>
  );
}

ConstructorMain.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
};

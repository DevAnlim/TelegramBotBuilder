import { PropTypes } from 'prop-types';
import ConstructorMainItemContainer from '../../containers/ConstructorMainItemContainer';
import MessageCommandContainer from '../../containers/MessageCommandContainer';
import ConstructorMainItem from '../ConstructorMainItem';
import ToolsList from '../ToolsList';
import ToolsListItem from '../ToolsListItem';
import styles from './ConstructorMain.module.scss';

export default function ConstructorMain({ children, list }) {
  return (
    <ToolsList
      id="constructorMain"
      className={`${styles['constructor-main-list']} custom-scroll`}
      classNameDrag={styles['constructor-main-list_dragged']}
      type="OPTIONS"
    >
      {/* {list?.map(({ id, label }, index) => (
        <ConstructorMainItem
          id={id}
          index={index}
          variant={styles['constructor-main-list__item']}
          variantDrag={styles['constructor-main-list__item_dragged']}
        >

        <ConstructorMainItemContainer id={id} value={label} />

      
        </ConstructorMainItem>
      ))} */}

      {children}
    </ToolsList>
  );
}

ConstructorMain.propTypes = {
  // list: PropTypes.instanceOf(Array).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.instanceOf(Array),
  ]).isRequired,
};

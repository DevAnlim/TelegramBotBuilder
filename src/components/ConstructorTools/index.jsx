import { PropTypes } from 'prop-types';
import styles from './ConstructorTools.module.scss';
import ToolsList from '../ToolsList';
import ToolsListItem from '../ToolsListItem';

export default function ConstructorTools({ children }) {
  return (
    <ToolsList
      id="constructorSideBar"
      className={`${styles['constructor-tools-list']} custom-scroll`}
      classNameDrag={styles['constructor-tools-list_dragged']}
      type="OPTIONS"
    >
      {/* {list?.map(({ id, label }, index) => (
        <ToolsListItem
          id={id}
          index={index}
          variant={styles['constructor-tools-list__item']}
          variantDrag={styles['constructor-tools-list__item_dragged']}
        >
          {label}
        </ToolsListItem>
      ))} */}

      {children}
    </ToolsList>
  );
}

ConstructorTools.defaultProps = {};

ConstructorTools.propTypes = {
  children: PropTypes.elementType.isRequired,
};

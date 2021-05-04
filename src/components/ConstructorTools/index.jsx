import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './ConstructorTools.module.scss';
import ToolsList from '../ToolsList';
import ToolsListItem from '../ToolsListItem';

export default function ConstructorTools({ list }) {
  return (
    <ToolsList
      id="droppable2"
      className={styles['constructor-tools-list']}
      classNameDrag={styles['constructor-tools-list_dragged']}
      type="OPTIONS"
    >
      {list?.map(({ id, label }, index) => (
        <ToolsListItem id={id} index={index}>
          {label}
        </ToolsListItem>
      ))}
    </ToolsList>
  );
}

ConstructorTools.defaultProps = {};

ConstructorTools.propTypes = {};

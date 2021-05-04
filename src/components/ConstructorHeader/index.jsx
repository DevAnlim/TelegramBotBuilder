import { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './ConstructorHeader.module.scss';
import Plusbutton from '../PlusButton';
import DivContainer from '../../base/DivContainer';
import Input from '../../base/Input';

export default function ConstructorHeader({ onClick, src }) {
  const [name, setName] = useState('name');
  const inputWidth = name.length;

  return (
    <div className={styles['constructor-header']}>
      <Plusbutton
        onClick={onClick}
        src={src}
        style={{ position: 'absolute', top: 15, left: 15 }}
      />

      <DivContainer
        style={{ width: 100, display: 'flex', justifyContent: 'center' }}
      >
        <Input
          type="text"
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
          style={{ width: `${inputWidth}rem` }}
        />
      </DivContainer>
    </div>
  );
}

ConstructorHeader.defaultProps = {
  src: null,
};

ConstructorHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string,
};

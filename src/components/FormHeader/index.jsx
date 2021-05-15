import { PropTypes } from 'prop-types';
import styles from './FormHeader.module.scss';
import Text from '../../base/Text';

export default function FormHeader({ options, activeId, onClick, ...props }) {
  return (
    <div className={styles['form-header']} props>
      {options.map(({ id, name }, index) => (
        <div
          key={index}
          onClick={() => {
            onClick(id);
          }}
          className={`${styles['form-header__item']} ${
            index === 0
              ? styles['form-header__item_border-left']
              : styles['form-header__item_border-right']
          } ${activeId === id && styles['form-header__item_active']}`}
        >
          <Text>{name}</Text>
        </div>
      ))}
    </div>
  );
}

FormHeader.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.func.isRequired,
  activeid: PropTypes.number.isRequired,
};

import styles from './ConstructorButton.module.scss';

export default function ConstructorButton({ onClick, remove, sm }) {
  return (
    <div
      className={`${styles['constructor-button']} ${
        remove && styles['constructor-button_remove']
      } ${sm && styles['constructor-button_sm']}`}
      onClick={onClick}
    />
  );
}

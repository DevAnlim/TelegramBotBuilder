import styles from './AddButton.module.scss';

export default function AddButton({ onClick }) {
  return <div className={styles['add-button']} onClick={onClick} />;
}

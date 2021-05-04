import styles from './LibraryButton.module.scss';

export default function LibraryButton() {
  return (
    <div className={styles['library-button']}>
      <span className={styles['library-button__item']} />
    </div>
  );
}

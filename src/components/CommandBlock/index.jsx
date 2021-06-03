import styles from './CommandBlock.module.scss';

export default function CommandBlock({ children, onClick }) {
  return (
    <div className={styles['command-block']}>
      {children}

      <div className={styles['command-block__button']} onClick={onClick} />
    </div>
  );
}

import styles from './Layout.module.scss';
import { PropTypes } from 'prop-types';
import Header from '../Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
};

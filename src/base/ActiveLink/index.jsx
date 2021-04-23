import { useRouter } from 'next/router';
import { PropTypes } from 'prop-types';
import styles from './ActiveLink.module.scss';

export default function ActiveLink({ children, href, onClick }) {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={
        router.pathname === href
          ? `${styles.link} ${styles.link_active}`
          : styles.link
      }
      onClick={onClick}
    >
      {children}
    </a>
  );
}

ActiveLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType.isRequired,
    PropTypes.instanceOf(Array).isRequired,
  ]),
  href: PropTypes.string.isRequired,
  onClick: PropTypes.bool.isRequired,
};

import { PropTypes } from 'prop-types';
import styles from './Modal.module.scss';

export default function Modal({ children, isOpen, onClose }) {
  {
    return (
      isOpen && (
        <div className={styles['modal-cover']} onClick={onClose}>
          <div className={styles['modal-dialog']}>
            <div
              className={styles['modal-body']}
              onClick={event => {
                event.stopPropagation();
              }}
            >
              {children}
            </div>
          </div>
        </div>
      )
    );
  }
}

Modal.propTypes = {
  children: PropTypes.elementType.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

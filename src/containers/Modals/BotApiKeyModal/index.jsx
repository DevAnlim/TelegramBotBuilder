import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../base/Modal';
import { closeApiKeyModal } from '../../../redux/actions/apiKeyModalActions';
import BotKeyForm from '../../Form/BotKeyForm';

export default function BotApiKeyModal() {
  const { isOpen } = useSelector(state => state.apiKeyModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeApiKeyModal());
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <BotKeyForm />
    </Modal>
  );
}

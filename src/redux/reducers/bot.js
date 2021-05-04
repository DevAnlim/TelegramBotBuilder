import sendRequest from '../../actions/sendRequest';

const intitalState = { script: [] };

export default function bot(state = intitalState, action) {
  switch (action.type) {
    case 'CREATE':
      sendRequest('/api/bot/create', 'POST', {
        token: '',
      });
      return state;

    default:
      return state;
  }
}

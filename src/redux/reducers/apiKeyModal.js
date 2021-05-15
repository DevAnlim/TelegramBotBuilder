const initialState = {
  isOpen: false,
};

export default function apiKeyModal(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_APIKEY_MODAL':
      return { ...state, isOpen: true };

    case 'CLOSE_APIKEY_MODAL':
      return { ...state, isOpen: false };

    default:
      return state;
  }
}

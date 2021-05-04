const initialState = {
  botList: [
    { id: 0, name: 'bot1', img: null },
    { id: 1, name: 'bot2', img: null },
  ],
};

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ORDER_DASHBOARD':
      return { ...state, botList: action.payload };

    default:
      return state;
  }
}

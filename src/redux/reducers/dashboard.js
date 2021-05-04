const initialState = {
  botList: [
    { id: 0, name: 'bot1', img: null },
    { id: 1, name: 'bot2', img: null },
    { id: 2, name: 'bot3', img: null },
    { id: 3, name: 'bot4', img: null },
    { id: 4, name: 'bot5', img: null },
    { id: 5, name: 'bot6', img: null },
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

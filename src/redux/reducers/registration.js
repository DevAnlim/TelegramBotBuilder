const initialState = {
  username: '',
  email: '',
  password: '',
};

export default function registration(state = initialState, action) {
  switch (action.type) {
    case 'REG_ONCHANGE_USERNAME':
      return { ...state, username: action.payload };

    case 'REG_ONCHANGE_EMAIL':
      //  if (/^\s+$/.test(action.email))

      return state;

    default:
      return state;
  }
}

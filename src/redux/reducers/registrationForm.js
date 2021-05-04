const initialState = {
  userName: { value: '', error: null },
  email: '',
  password: '',
};

export default function registrationForm(state = initialState, action) {
  switch (action.type) {
    case 'VALIDATE_USERNAME':
      const userName = state.userName;

      if (typeof userName.value.le) {
      }

    default:
      return state;
  }
}

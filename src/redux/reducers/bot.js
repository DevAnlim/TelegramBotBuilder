const intitalState = {
  list: [],
};

export default function bot(state = intitalState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const newList = [''];

    case 'CHANGE_VALUE':
      const { list } = [...state.list];

      newList = list.map(newListItem => {
        if (newListItem.id === action.payload.id) {
          newListItem.value = action.payload.value;
        }
      });

      return { ...state, list: [...newList] };
    default:
      return state;
  }
}

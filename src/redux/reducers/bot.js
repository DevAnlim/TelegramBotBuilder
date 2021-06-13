const intitalState = {
  list: [],
};

export default function bot(state = intitalState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      let newList = [...state.list];
      const idList = newList.map(({ id }) => id);

      const index = idList.indexOf(action.payload.id);

      if (index === -1) {
        newList.push(action.payload);
      }

      return { ...state, list: [...newList] };

    case 'UPDATE_LIST':
      return { ...state, list: [...action.payload] };

    case 'CHANGE_VALUE':
      newList = [...state.list];

      newList = newList?.map(newListItem => {
        if (newListItem.id === action.payload.id) {
          newListItem.values[action.payload.name] = action.payload.value;
        }

        return newListItem;
      });

      return { ...state, list: [...newList] };
    default:
      return state;
  }
}

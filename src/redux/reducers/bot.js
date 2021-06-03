const intitalState = {
  list: [],
};

export default function bot(state = intitalState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      let newList = [...state.list];
      newList.push(action.payload);

      console.log(state.list);

      return { ...state, list: [...newList] };

    case 'UPDATE_LIST':
      console.log(action.payload);
      return { ...state, list: [...action.payload] };

    case 'CHANGE_VALUE':
      newList = [...state.list];

      newList = newList?.map(newListItem => {
        if (newListItem.id === action.payload.id) {
          newListItem.values[action.payload.name] = action.payload.value;
        }

        return newListItem;
      });

      console.log(newList, 'Values');
      return { ...state, list: [...newList] };
    default:
      return state;
  }
}

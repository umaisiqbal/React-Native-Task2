const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1;
    case 'DECREMENT_COUNTER':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;

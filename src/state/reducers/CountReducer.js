const initialSate =0

export const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case "INCREAMENT_COUNT":
      return state + action.payload;
    case "DECREASE_COUNT":
      return state - action.payload;
    case "INCCOUNT":
      return state + action.payload;
    default:
      return state;
  }
};
export default reducer;

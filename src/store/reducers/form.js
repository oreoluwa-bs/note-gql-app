export const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  };
};

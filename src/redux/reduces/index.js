const initialState = [];

    const mainReducer = (state = initialState, action) => {
        switch (action.type) {
          case ADD_FAVOURITE:
            if (!state.find(item => item.company_name === action.payload.company_name)) {
              return [...state, action.payload];
            }
            return state;
          case REMOVE_FAVOURITE:
            return state.filter(item => item.company_name !== action.payload.company_name);
          default:
            return state;
        }
      };
      

  export default mainReducer
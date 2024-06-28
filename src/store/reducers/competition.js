const initialState = {
    selectedCompetition: null
  };
  
  const competitionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'NEWSELECTION':
        return {
          ...state,
          selectedCompetition: action.payload
        };
      default:
        return state;
    }
  };
  
  export default competitionReducer;
  
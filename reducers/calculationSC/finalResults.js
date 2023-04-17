export function resultsReducer(state,action){
  switch(action.type){
    case 'ADD_TOTAL_AREA' :{
      return {
        ...state,
        resultArea: action.payload,
      }
    }
    case 'ADD_TOTAL_WEIGHT' :{
      return {
        ...state,
        weightResult: action.payload,
      }
    }
    case 'ADD_PRODUCT_SELECTED' :{
      return {
        ...state,
        productSelected: action.payload,
      };
    }
  }
  return state;
}
export const initialStateResults = {
  resultArea: 0,
  weightResult: 0,
  productSelected:'No product selected',
}
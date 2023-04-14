export function resultsReducer(stateFinalResult,action){
  switch(action.type){
    case 'ADD_TOTAL_AREA' :{
      return {
        ...stateFinalResult,
        resultArea: action.payload,
      }
    }
    case 'ADD_TOTAL_WEIGHT' :{
      return {
        ...stateFinalResult,
        weightResult: action.payload,
      }
    }
    case 'ADD_PRODUCT_SELECTED' :{
      return {
        ...stateFinalResult,
        productSelected: action.payload,
      };
    }
  }
  return stateFinalResult;
}
export const initialState = {
  resultArea: 0,
  weightResult: 0,
  productSelected:'No product selected',
}
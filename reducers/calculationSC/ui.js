export function uiReducer(state,action){
  switch(action.type){
    case 'DISABLED_PRIMARY_BTN' :{
      return {
        ...state,
        isBtnDisabled: action.payload,
      }
    }
    case 'CHANGE_PRIMARY_BTN_OPACITY' :{
      return {
        ...state,
        btnOpacity: action.payload,
      }
    }
    case 'DISABLED_PICKER_CATEGORIES' :{
      return {
        ...state,
        isPickerCategoriesDisabled: action.payload,
      }
    }
    case 'DISABLED_PICKER_SEEDS' :{
      return {
        ...state,
        isPickerSeedDisabled: action.payload,
      }
    }
    case 'CHANGE_PICKER_CATEGORIES_OPACITY' :{
      return {
        ...state,
        pickerCategoriesOpacity: action.payload,
      }
    }
    case 'CHANGE_PICKER_SEEDS_OPACITY' :{
      return {
        ...state,
        pickerSeedOpacity: action.payload,
      }
    }
  }
  return state;
}
export const initialStateUi = {
  isBtnDisabled:true,
  btnOpacity:0.2,
  isPickerCategoriesDisabled:true,
  pickerCategoriesOpacity:0.3,
  isPickerSeedDisabled:true,
  pickerSeedOpacity:0.3,
}
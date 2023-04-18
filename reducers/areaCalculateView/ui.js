export function uiReducer(state,action){
  switch(action.type){
    case 'ENABLE_TEXT_INPUTS' :{
      return {
        ...state,
        isTextInputEnabled: action.payload,
      }
    }
    case 'DISABLED_RESET_BTN' :{
      return {
        ...state,
        isResetBtnDisabled: action.payload,
      }
    }
    case 'DISABLED_SET_BTN' :{
      return {
        ...state,
        isSetBtnDisabled: action.payload,
      }
    }
    case 'CHANGE_RESET_BTN_OPACITY' :{
      return {
        ...state,
        opacityResetBtn: action.payload,
      }
    }
    case 'CHANGE_SET_BTN_OPACITY' :{
      return {
        ...state,
        opacitySetBtn: action.payload,
      }
    }
  }
  return state;
}
export const initialStateUi = {
  isTextInputEnabled:true,
  isResetBtnDisabled:true,
  isSetBtnDisabled:false,
  opacityResetBtn:0.2,
  opacitySetBtn:1,
}
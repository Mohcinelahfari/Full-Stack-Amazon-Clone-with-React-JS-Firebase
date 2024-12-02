import * as actionTy  from "./ActionType"
export const initailState = {
    basket : [],
    user : null
}


 const AppReducer = (state = initailState, action) => {
    switch(action.type){
        case actionTy.SET_USER : 
            return {
                ...state, user : action.user
            }
            default :
                return state;
    }
}
export default AppReducer;
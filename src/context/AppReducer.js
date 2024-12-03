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
        case actionTy.ADD_TO_BASKET : 
            return {
                ...state,
                basket : [...state.basket, action.item  ]
            }
            default :
                return state;
    }
}
export default AppReducer;
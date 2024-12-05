import * as actionTy  from "./ActionType"
export const getBasketTotal = (basket) => {
    return basket.reduce((firstprice, item) => {
        return firstprice + item.price
    },0)
} 

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
        case actionTy.REMOVE_FROM_BASKET : 
            return {
                ...state,
                basket : state.basket.filter(item => item.id !== action.id )
            }
            default :
                return state;
    }
}
export default AppReducer;
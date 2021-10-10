import * as actionTypes from "../../constants/ActionTypes";

const initialState = {
  mealList: [],
  chcknMenuList: [],
};

//reducer for get data
export default function MealListReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_MEAL_DATA:
      return {
        ...state,
        mealList: [...action.data],
      };
    case actionTypes.GET_CHICKEN_MENU:
      return {
        ...state,
        chcknMenuList: [...action.data],
      };

    default:
      return state;
  }
}

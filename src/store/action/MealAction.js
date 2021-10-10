import * as actionTypes from "../../constants/ActionTypes";

//action for get movie data
function getMealListAction(data) {
  return (dispatch) => {
    return dispatch({ type: actionTypes.GET_MEAL_DATA, data });
  };
};
//action for get all chicken list
function getChickenMealAction(data) {
  return (dispatch) => {
    return dispatch({ type: actionTypes.GET_CHICKEN_MENU, data });
  };
};




export {getMealListAction,getChickenMealAction};
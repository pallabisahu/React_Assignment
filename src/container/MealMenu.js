import { connect } from "react-redux";
//import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import MealMenu from "../../src/components/menuofmeal/MealMenu";
import  {getMealListAction}  from "../../src/store/action/MealAction";

const mapStateToProps = (state) => {
  return {
    mealListData: state.MealListReducer.mealList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
        getMealListAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MealMenu);

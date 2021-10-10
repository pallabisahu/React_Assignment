import { connect } from "react-redux";
//import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ChickenMenu from "../components/menuofmeal/ChickenMenu";
import  {getChickenMealAction}  from "../../src/store/action/MealAction";

const mapStateToProps = (state) => {
  return {
    chickenMealListData: state.MealListReducer.chcknMenuList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
        getChickenMealAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChickenMenu);

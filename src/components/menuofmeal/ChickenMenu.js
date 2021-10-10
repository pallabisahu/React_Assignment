import React, { Component } from "react";
import "./styles.css";
import { getChickenMenu } from "../../apiservices/MealServices";

class MealMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      srchText: "",
    };
  }

  componentDidMount() {
    this.getChickenMenuList();
  }

  //call get api for fetching data
  getChickenMenuList = async () => {
    this.setState({ loading: true });
    //calling api for getting menu list
    await getChickenMenu()
      .then((res) => {
        this.setState({
          loading: false,
        });
        this.props.getChickenMealAction(res.data.meals);
      })
      .catch((err) => {
        this.setState({ loading: true });
        console.log("Rejected Request", err.message);
      });
  };

  render() {
    let { chickenMealListData = [] } = this.props;
    let { loading = "" } = this.state;

    return (
      <div className="p-3 mb-2  parentDiv ">
        <div className="col-xl-2 col-lg-2">
          <p className="mt-4 menuHeaderText"> Chicken Menu </p>
        </div>

        <hr className="lineStyle" />
        {loading ? <span className="text-secondary">Loading...</span> : ""}
        <div className="row">
          {chickenMealListData.map((list) => (
            <div className="col-lg-4 col-xl-4">
              <div className="card menuCard ml-5 mt-3">
                <img
                  className="card-img-top menuImg "
                  src={list.strMealThumb}
                  alt="poster"
                ></img>
                <div className="card-body ">
                  <p className="card-title menuTitle">{list.strMeal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MealMenu;

import React, { Component } from "react";
import "./styles.css";
import { getAllMenuList } from "../../apiservices/MealServices";

import { Link } from "react-router-dom";
const stringSortingByChar = (str, char) => {
  if (
    str != null &&
    str != undefined &&
    str != "" &&
    str.length > char &&
    str.length != char
  ) {
    let sorted = str.slice(0, char);

    return sorted + "...";
  } else {
    return str;
  }
};

class MealMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      srchText: "",
      showComponent: false,
    };
  }

  componentDidMount() {
    this.getMenuList();
  }

  //call get api for fetching data
  getMenuList = async () => {
    this.setState({ loading: true });
    //calling api for getting menu list
    await getAllMenuList()
      .then((res) => {
        this.setState({
          loading: false,
        });
        this.props.getMealListAction(res.data.categories);
      })
      .catch((err) => {
        this.setState({ loading: true });
        console.log("Rejected Request", err.message);
      });
  };

  render() {
    let { mealListData = [] } = this.props;
    let { loading = "" } = this.state;

    return (
      <div className="p-3 mb-2  parentDiv ">
        <div className="col-xl-2 col-lg-2">
          <p className="mt-4 menuHeaderText"> Menu Categories </p>
        </div>

        <hr className="lineStyle" />
        {loading ? <span className="text-secondary">Loading...</span> : ""}
        <div className="row">
          {mealListData.map((list) => (
            <div className="col-lg-4 col-xl-4">
              <div className="card menuCard ml-5 mt-3">
                <img
                  className="card-img-top menuImg "
                  src={list.strCategoryThumb}
                  alt="poster"
                ></img>
                <div className="card-body ">
                  <span className="card-title menuTitle">{list.strCategory}</span>
                  {list.strCategory == "Chicken" ? (
                    <Link to="/ChickenMenu" className="linkColor">
                      <span className="cursor ml-4">View More</span>
                    </Link>
                  ) : (
                    ""
                  )}

                  <p
                    class="card-text description"
                    title={list.strCategoryDescription}
                  >
                    {stringSortingByChar(list.strCategoryDescription, 80)}
                  </p>
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

import axios from "axios";

import { API_URL } from "../constants/ApiUrlContants";
let AuthToken="Bearer Wookie2019";
export const getAllMenuList = async () => {
 
  let request = await axios.get(
    `${API_URL.GET_MENU_LIST}`,

    {
      headers: {
        // Authorization: AuthToken,
      },
    }
  );
  return request;
};
export const getChickenMenu = async (srchTeXt) => {
 
  let request = await axios.get(
    `${API_URL.GET_CHICKEN_LIST}`,

    {
      headers: {
      //  Authorization: AuthToken,
      },
    }
  );
  return request;
};
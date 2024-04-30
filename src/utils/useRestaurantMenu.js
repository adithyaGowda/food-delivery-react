import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await fetch(MENU_API + resID);

    const json = await menu.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;

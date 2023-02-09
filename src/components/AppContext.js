import React, { createContext, useEffect, useReducer, useState } from "react";
import { tmpData } from "../TmpData";
import makeData from "./makeData";
import { reducer } from "./Reducer";
export const MyContext = createContext();

const AppContext = ({ children }) => {
  const [tableData, setTableData] = useState([]);
  const handleClick = async () => {
    try {
      let res = await fetch("https://sheetdb.io/api/v1/46h3j5y8r4kdw");
      let data = await res.json();
      dispatch({ type: "fetch_data", payload: data });
      setTableData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [state, dispatch] = useReducer(reducer, makeData([]));

  const value = { state, dispatch, tableData };

  useEffect(() => {
    handleClick();
  }, []);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default AppContext;

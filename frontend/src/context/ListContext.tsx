import React, { useState, createContext, ReactNode, useEffect } from 'react';

import axios from 'axios' 


export const ListContext = createContext({dataList:[]});

type Props = {
  children: ReactNode;
};

const ListContextProvider= ({ children }:Props) => {
  const url = "http://localhost:4000"
  const [dataList, setDataList] = useState([]);


  useEffect(() => {
  const loadingList = async () => {
    const response = await axios.get(`${url}/api/user/getList`)
  setDataList(response.data.user)
  }
    loadingList();
  console.log(contextValue.dataList)

  },[])
  const contextValue = {
      dataList,
  };

  return (
    <ListContext.Provider value={contextValue}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;

import React, { useState, createContext, ReactNode, useEffect, useReducer, Dispatch } from 'react';
import axios from 'axios';

export const ListContext = createContext<ContextType | null>(null);

type StateType = {
  user: any;
};

type ActionType = {
  type: string;
  payload: any;
};

type ContextType = {
  dataList: any[];
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  userInfo: StateType;
  dispatch: Dispatch<ActionType>;
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

type Props = {
  children: ReactNode;
};

const ListContextProvider:React.FC<Props>= ({ children }) => {
  const url = "http://localhost:4000";
  const [dataList, setDataList] = useState<any[]>([]);
  const [token, setToken] = useState<string>("");
  const [userInfo, dispatch] = useReducer(reducer, { user: null });

  useEffect(() => {
    const loadingList = async () => {
      try {
        const response = await axios.get(`${url}/api/user/getList`);
        setDataList(response.data.user);
      } catch (error) {
        console.error("Error loading list:", error);
      }
    };
    loadingList();
  }, []);

  const contextValue: ContextType = {
    dataList,
    token,
    setToken,
    userInfo,
    dispatch
  };

  return (
    <ListContext.Provider value={contextValue}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;

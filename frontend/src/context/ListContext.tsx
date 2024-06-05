import React, { useState, createContext, useEffect, useReducer, ReactNode, Dispatch, FC } from 'react';
import axios from 'axios';

type StateType = {
  user: any; // You can replace 'any' with a more specific type if you know the shape of 'user'
};

type ActionType = {
  type: "GET_USER";
  payload: any; // Replace 'any' with the specific type of your user data
};

type ContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  userInfo: StateType;
  dispatch: Dispatch<ActionType>;
};

export const ListContext = createContext<ContextType | null>(null);

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

type Props = {
  children: ReactNode;
};

const ListContextProvider: FC<Props> = ({ children }) => {
  const url = "http://localhost:4000";
  const [userInfo, dispatch] = useReducer(reducer, { user: null });
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    async function loading() {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        await loadUser(storedToken);
      }
    }
    loading();
  }, []);

  const loadUser = async (token: string) => {
    try {
      const response = await axios.get(`${url}/api/user/getUser`, { headers: { token } });
      setToken(response.data.user)
      console.log(response.data.user);
      // Optionally, you can dispatch an action to update the user info in state
      dispatch({ type: "GET_USER", payload: response.data.user });
    } catch (error) {
      console.error('Error loading user:', error);
      // Handle the error appropriately
    }
  };

  const contextValue: ContextType = {
    token,
    setToken,
    userInfo,
    dispatch,
  };

  return (
    <ListContext.Provider value={contextValue}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;

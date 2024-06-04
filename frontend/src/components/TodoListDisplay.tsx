import React, { useContext } from 'react';
import { ListContext } from "../context/ListContext";
import TodoListItem from "./TodoListItem";
import { RiAddLine } from "react-icons/ri";

const TodoListDisplay = () => {
  const { dataList } = useContext(ListContext);

  return (
    <div className="h-screen w-full">
      <div className="py-10 text-2xl font-semibold flex justify-between items-center">
        <h1>My List</h1>
        <button className="flex gap-1 items-center bg-gray-700 px-4 py-3 text-xl rounded-full text-blue-400 active:bg-gray-800">
          <RiAddLine />NEW LIST
        </button>
      </div>
      {dataList && dataList.length > 0 ? (
        dataList.map((item, index) => (
          // <TodoListItem key={index} item={item} />
          <h1></h1>
        ))
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};

export default TodoListDisplay;
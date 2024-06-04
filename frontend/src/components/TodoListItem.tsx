import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";

type Props = {
  name:string
}

const TodoListItem = ({name}: Props) => {
  const flexBetween:string = "flex justify-between items-center";
  return (
    <div className="rounded-md bg-gray-700 px-4 py-4">
      <div className={`${flexBetween}`}>
        <h1>Utang ni barrios</h1>
        <HiOutlineDotsVertical/>
      </div>
      <div>
        <h1>0/1</h1>
      </div>
    </div>
  )
}

export default TodoListItem
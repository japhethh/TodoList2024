import React, { useContext } from 'react';
import TodoListDisplay from '../components/TodoListDisplay';
import { ListContext } from '../context/ListContext';


const Home = () => {
  
  const context = useContext(ListContext);

  if (!context) {
    // Handle the case where the context is null (e.g., by showing an error or loading state)
    return <div>Loading...</div>;
  }

  const { userInfo, dispatch } = context;

  return (
    <div className='mx-auto w-5/6'>
      {userInfo.user && (
        <div>
          {userInfo.user.name}
        </div>
      )}
      {/* <TodoListDisplay/> */}
    </div>
  );
}

export default Home;

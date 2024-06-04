import TodoListDisplay from '../components/TodoListDisplay'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='mx-auto w-5/6'>
      <TodoListDisplay/>
    </div>
  )
}

export default Home
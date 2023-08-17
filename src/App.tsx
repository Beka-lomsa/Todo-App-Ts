import HeadTodo from "./Components/HeadTodo"
import Todo from "./Components/Todo"
import './App.css'

function App() {

  return (
    <div className='container'>
      <h1>Todo</h1>
      {/* <div><Data/></div> */}
      <div className='todocontainer'>
        <HeadTodo/>
        <Todo/>
      </div>
    </div>
  )
}

export default App

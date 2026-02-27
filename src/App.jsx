import Header from './components/Header'
import Todoitems from './components/Todoitems'
import Button from './components/Button'
import './App.css'

function App() {

  const todos = ["Eat", "Study", "Exercise", "Play", "Sleep"];

  return (
    <div className='app-container'>

      <Header/>

      <ul>

        {todos.map((todo, index) => (
          <Todoitems key={index} text={todo}/>
        ))}

      </ul>

      <Button/>

    </div>
  )
}

export default App
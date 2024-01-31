
import './App.css';
import { useState } from 'react'
function App() {

  const [toDolist, setToDoList] = useState([]);
  const [task, setTask] = useState("");
  function addTask(event) {
    setTask(event.target.value)
  }
  function addToDoList() {
    const obj = {
      id: toDolist.length === 0 ? 1 : toDolist[toDolist.length - 1].id + 1,
      name: task,
      completed: false
    }
    const newobj = [...toDolist, obj]
    setToDoList(newobj);
  }
  function toggleCompleted(item_id) {
    const updatedList = toDolist.map((task) => {
      console.log(task.completed)
      if (task.id === item_id) {
        return {
          id: task.id,
          name: task.name,
          completed: !task.completed
        };
      }
      return task;
    })
    setToDoList(updatedList);
  }
  function removeTask(task_id) {
    const updatedList = toDolist.filter((task) => {
      if (task.id === task_id)
        return false;
      else
        return true;
    }
    )
    setToDoList(updatedList)
  }

  function clearCompleted() {
    const updatedList = toDolist.filter((item) => {
      if (item.completed === true)
        return false;
      else
        return true;
    })
    setToDoList(updatedList);
  }
  return <div className="App">
    <div className='TopHeader' >
      <h1 className='ToDoHeading'>To-do List</h1>
      <div>
        <input className='TopInput' onChange={addTask} type='text' id='name' placeholder='Task Name'></input>
        {/* <label for='name'>Task name</label> */}
        <button onClick={addToDoList}>Add Task</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
    {toDolist.map((item) => {
      return <div className={item.completed ? 'completed' : 'item'}><h1 className='TodoTask'>{item.name}</h1>
        <div>
          <button onClick={() => toggleCompleted(item.id)}>{item.completed ? 'to complete' : 'completed'}</button>
          <button onClick={() => removeTask(item.id)}>X</button>
        </div>

      </div>
    })}
  </div >
}

export default App;


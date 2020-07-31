import React, { useState } from 'react'
import "./toDoList.css"
import Task from '../task/task'
export default function ToDoList() {
  const [tasks, settasks] = useState([])
  const [task, settask] = useState('')
  function onchange(event) {
    settask(event.target.value)

  }
  function addTask(event) {
    event.preventDefault();
    if (task === "")
      return
    settasks((prevtasks) => [...prevtasks, task])
    settask('')

  }
  function Delete(key) {

    settasks((prevState) => prevState.filter((elt, ind) => ind != key))

  }
  function confirm(key, newval) {

    const new_tab = [...tasks]
    new_tab[key] = newval
    settasks(new_tab)
  }
  const tasklists = tasks.map((elt, ind) => <Task confirm={confirm} delete={() => { Delete(ind) }} ind={ind} key={ind} val={elt}></Task>)
  return (
    <div className="container">
      <form >
        <h1>*Add Task*</h1>
        <div className="inputContainer">
          <div className="inputContainerInner">
            <input placeholder="add task" onChange={onchange} value={task} ></input>
            <button onClick={addTask}> Add </button>
          </div>
          <img src="ghof.png" />
        </div>
      </form>
      {tasklists}
    </div>

  )
}

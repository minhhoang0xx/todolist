

import moment from 'moment/moment';
import { useState } from 'react';
import "./App.css";
function App() {

  const [todo, setTodo] = useState('')
  const [show, setShow] = useState([])
  const [check, setCheck] = useState(["unchecked", "checked"])
  const [isEditting, setIsEditing] = useState(false)
  const [editItemId, setEditItemId] = useState('')

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const nameInput = () => {
    let todoId = randomIntFromInterval(1, 99)
    let todoItem = {
      id: `${todoId}`, content: `${todo}`, status: `${check[(0)]}`
    }
    setShow([...show, todoItem])// ...show de copy nhung cai cu, name la add thang moi
    setTodo('')//clear txt

  };

  const editInput = () => {
    let newEdit = show.map(item => {
      if (item.id == editItemId) {
        return { ...item, content: todo };// luu nhung cai item. cu xong update,__
      }
      return item;
    })

    setShow(newEdit);
    setIsEditing(false)
    setTodo('')
  };

  const clickOnCheckbox = (id) => {
    let newCheck = (show)
    newCheck = show.map(item => {
      if (item.id == id) {
        return { ...item, status: check[(1)] };// luu nhung cai item. cu xong update,__
      }
      return item;
    })
    setShow(newCheck);
  };

  const deleteName = (id) => {
    let newShow = (show)
    newShow = show.filter(item => item.id !== id);
    setShow(newShow)
  };

  const removeAll = () => {
    setShow([]);
  }

  return (
    
    <div className="container">
      <h1>Todolist</h1>
      <input className="input" type="text" value={todo} placeholder="Take the garbage out..."
        onChange={(e) => setTodo(e.target.value)} />
      {/* onChange de thay doi trong txt */}
      <button className='todo' type="submit" onClick={() => {
        if (isEditting) {
          editInput()
        } else {
          nameInput()
        }
      }}>{isEditting ? 'Edit' : 'Add'}</button>

      <p className='p'>You have {show.length} pending items </p>

      {show.map((item, index) => {
        return (
          <div className="in4" id={item.id} key={item.id}>
            <input className="checkbox" type="checkbox" defaultChecked={!check} onClick={() => clickOnCheckbox(item.id)}></input>
            <input className="txtname" type="text" value={item.content} onClick={(todo) => { setTodo(todo.target.value); setIsEditing(true); setEditItemId(item.id) }} readOnly></input>
            <button className="delete" onClick={() => deleteName(item.id)}>Del</button>
          </div>
        )
      })}
      <p className="removeAll" onClick={() => removeAll()}><strong>Clear All</strong></p>
    </div>

  );
}

export default App;

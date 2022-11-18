

import { useState } from 'react';
import "./App.css";
function App() {

  const [todo, setTodo] = useState('')
  const [show, setShow] = useState([])
  const [check, setCheck] = useState(["unchecked","checked"])

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
    console.log(check)
  };

  const clickOnCheckbox=(id)=>{
    let newCheck=(show)
    newCheck=show.map(item => {
    if(item.id == id){ 
      return {...item,status : check[(1)]};// luu nhung cai item. cu xong update,__
    }
    return item; 
  })
  console.log(newCheck)
  setShow(newCheck);
  }

  const deleteName = (id) => {
    let newShow =(show)
    newShow = show.filter(item => item.id !== id);
    // console.log(newShow)
    setShow(newShow)
  }
  return (
    <div class="edit">
      <h1> TODOLIST</h1>
      <label>Input: </label>
      <input type="text" value={todo} placeholder="input your name..."
        onChange={(e) => setTodo(e.target.value)} />
      {/* onChange de thay doi trong txt */}
      <button class="add" type="submit" onClick={() => nameInput()}> ADD</button>

      {show.map((item, index) => {
        return (
          <div id={item.id} key={item.id}>
            <input type="checkbox" defaultChecked={!check}  onClick={()=> clickOnCheckbox(item.id)}></input>  
            {item.content}
            <button class="delete" onClick={() =>deleteName(item.id)}>Del</button>
          </div>
        )
      })}
    </div>

  );
}

export default App;

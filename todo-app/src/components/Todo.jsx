import {useState} from "react"
import TodoItem from "./TodoItem";
import Todolist from "./Todolist";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx"

export default function Todo(){
  const [todos,setTodos]=useState([])
  const compleatedTodos=todos.filter((todo)=>todo.done).length
  const totalTodos=todos.length
    return (
    <div>
      <Form todos={todos} setTodos={setTodos}/>
      <Todolist todos={todos} setTodos={setTodos}/>
      <Footer compleatedTodos={compleatedTodos} totalTodos={totalTodos}/>
    </div>
    )
}
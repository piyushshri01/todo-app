import './App.css';
import Navbar from './mycomponents/Navbar'
import Todos from './mycomponents/Todos'
import Footer from './mycomponents/Footer'
import React, { useState, useEffect } from 'react';
import AddTodo from "./mycomponents/AddTodo"
import About from './mycomponents/About'
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo = []
  if(localStorage.getItem("todos") === null){
    initTodo = []
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    // console.log("i am onDelete", todo);
    setTodos(todos.filter((e)=>{
        return e!==todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    // console.log(`New Todos Title is ${title} and Description is ${desc}`);
    let sno;
    if(todos.length === 0){
      sno = 1
    }else{
      sno = todos[(todos.length)-1].sno+1
    }
    const myTodo = {
      sno,
      title,
      desc
    }
    setTodos([...todos, myTodo])
    // todos exists in localStorage or not but we always save new todo in todos list
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const [todos, setTodos] = useState(initTodo)

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
 

  return (
    <>
      <Router>
        {/* title is working as a props in Navbar component */}
        <Navbar title="My Todos List"/>
        <Routes>
          <Route exact path="/" element={
            <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>
          }>  
          </Route>
          <Route exact path="/about" element={
            <>
              <About />
            </>
          }>
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </> 
  );
}

export default App;

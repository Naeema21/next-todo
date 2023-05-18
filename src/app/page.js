'use client';

import { useEffect, useState } from 'react'
import TodoList from '../../components/TodoList'
import styles from '../../styles/page.module.css'
import AddTodo from '../../components/AddToDo';

export default  function Home() {
  const [todos, setTodos] = useState([])

 const getList = async() => {
  const res = await fetch('/api/list');
  const data = await res.json();
  setTodos(data)
 }

 useEffect(()=>{
  getList()
 },[])

  const handleAddTodo = async (text) => {
    try {
      const newTodo = { id: todos?.length+1, text, completed: false }
      const res = await fetch('/api/list' , {
        method:'POST',
        body:JSON.stringify(newTodo)
      })
      const data = await res.json();
      // Set the status based on the response from the API route
      if (res.status === 200) {
         setTodos([...todos, data?.data])
      } 
    }catch (e) {
      console.log(e)
    }
  }

  const handleToggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <main className={styles.main}>
      <div className={styles.card}>
      <AddTodo onSubmit={handleAddTodo} />
      <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
      </div>
    </main>
  )
}

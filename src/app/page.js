'use client';

import { useEffect, useState } from 'react'
import TodoList from '../../components/TodoList'
import styles from '../../styles/page.module.css'
import AddTodo from '../../components/AddToDo';

export default function Home() {
  const [todos, setTodos] = useState([])

  const getList = async () => {
    const res = await fetch('/api/list');
    const data = await res.json();
    setTodos(data)
  }

  useEffect(() => {
    getList()
  }, [])

  const handleAddTodo = async (title) => {
    try {
      const newTodo = { title, completed: false }
      const res = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify(newTodo)
      })
      const data = await res.json();
      // Set the status based on the response from the API route
      if (res.status === 200) {
        setTodos([...todos, data?.data])
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleToggleTodo = async (todo) => {
    try {
      const newTodo = { title:todo?.title, completed: !todo?.completed }
      console.log(newTodo)
      const res = await fetch(`/api/list/${todo?.id}`, {
        method: 'PUT',
        body: JSON.stringify(newTodo)
      })
      // Set the status based on the response from the API route
      if (res.status === 200) {
        // setTodos(newTodos)
      }
    } catch (e) {
      console.log(e)
    }

  }

  const handleDeleteTodo = async (id) => {
    try {
      const res = await fetch(`/api/list/${id}`, {
        method: 'DELETE',
      })
      if (res.status == 200) {
        const newTodos = todos.filter((todo) => todo?.id !== id)
        setTodos(newTodos)
      }
    } catch (e) {
      console.log(e)
    }
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

import { useState } from 'react'
import styles from '../styles/page.module.css'

function AddTodo({ onSubmit }) {
  const [title, settitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(title)
    settitle('')
  }

  const handleChange = (event) => {
    settitle(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="title" value={title} onChange={handleChange}  className={styles.input_tag} placeholder='Add task...'/>
      <button type="submit" className={styles.add_button}>Add Task</button>
    </form>
  )
}

export default AddTodo
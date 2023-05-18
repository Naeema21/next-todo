import { useState } from 'react'
import styles from '../styles/page.module.css'

function AddTodo({ onSubmit }) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(text)
    setText('')
  }

  const handleChange = (event) => {
    setText(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange}  className={styles.input_tag} placeholder='Add task...'/>
      <button type="submit" className={styles.add_button}>Add Task</button>
    </form>
  )
}

export default AddTodo
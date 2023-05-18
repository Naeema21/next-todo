import styles from '../styles/page.module.css'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={styles.list_item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{overflowWrap:'anywhere'}}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} className={styles.delete_button}>Delete</button>
    </div>
  )
}

export default TodoItem
import classes from './TodoIteam.module.css'

function TodoItem({taskName, todos, setTodos, todoIndex}) { // used props
    function deleteTodo() {
        const updatedTodos = todos.filter((_, index) => index !== todoIndex)
        setTodos(updatedTodos)
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    return (
        <div className={classes.todo}>
            <p>{taskName}</p>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default TodoItem

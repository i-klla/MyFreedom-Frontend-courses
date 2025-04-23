import classes from './TodoForm.module.css'

function TodoForm(todos, setTodos, todoInputValue, setTodoInputValue) {

    function addTodo(event) {
        event.preventDefault() // отменяем перезагрузку стр из-за формы
        // Falsy values - это знч которые выдают false
        // undefined, '', null, false, 0
        if(!todoInputValue.trim()) { // если нету пробелов. Не дает добавить путую строку 
            alert('Task name is empty!')
            return
        }
        setTodos([...todos, todoInputValue.trim()]) // [Task 1', 'Task 2', 'Task 3', 'Какая-то задача'] // добавляем задачу в массив
        setTodoInputValue('') // сбрасываем до пустой строки, синхронизировали с value в input. value в инпуте тоже очищается
    } 

    function changeInputValue(event) {
        setTodoInputValue(event.target.value)
    }

    return (
         <form className={classes.todoForm}>
                <input value={todoInputValue} onChange={changeInputValue} placeholder='Enter task name' type="text" />
                <button onClick={addTodo}>Add</button>
            </form>
    )
}

export default TodoForm

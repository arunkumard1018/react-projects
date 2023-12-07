
function ListTodosComponent() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 2, today.getMonth(), today.getDay())
    const todos = [
        { id: 111, description: "Learn Aws", isDone: false, targetDate: targetDate },
        { id: 112, description: "Learn Java", isDone: true, targetDate: targetDate },
        { id: 113, description: "Learn Cloud", isDone: false, targetDate: targetDate },
        { id: 114, description: "Learn AZure", isDone: true, targetDate: targetDate }
    ]
    
    return (
        <div className='listTodos'>
            <div>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <td>Todo Id</td>
                            <td>Todo Discription</td>
                            <td>Todo is Done</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.isDone.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default ListTodosComponent
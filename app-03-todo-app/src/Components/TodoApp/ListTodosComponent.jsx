import { Link } from "react-router-dom"

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
        <div className='listTodos mx-52'>
            <div>
                <table className='table w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className="text-md font-bold text-white uppercase bg-gray-50 dark:bg-gray-700">
                        <tr >
                            <td className="px-6 py-3">Todo Id</td>
                            <td className="px-6 py-3">Todo Discription</td>
                            <td className="px-6 py-3">Todo is Done</td>
                            <td className="px-6 py-3 text-left" colspan="3">Target Date</td>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                        key={todo.id} >
                                        <td className="px-6 py-4">{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{(todo.isDone) ? "YES" : "NO"}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                        <td class="px-6 py-4 hover:bg-zinc-700">
                                            <Link to="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</Link>
                                        </td>
                                        <td class="px-6 py-4 hover:bg-zinc-700">
                                            <Link to="#" class="font-medium text-red-500 dark:text-red-500 hover:underline ">Delete</Link>
                                        </td>
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
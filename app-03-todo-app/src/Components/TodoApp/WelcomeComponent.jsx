import { Link, useParams } from 'react-router-dom'


function WelcomeComponent() {
    const { userName } = useParams()
    return (
        <div className='WelcomeComponent mx-52'>
            <h1 className='text-2xl font-light'>Hello {userName}</h1>
            <div className='mt-5 '>
                Manage your todos - <Link to='/todos' className='mt-5 hover:underline text-blue-900'>Go Here</Link>
            </div>
        </div>
    )
}


export default WelcomeComponent
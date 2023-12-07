import { Link, useParams } from 'react-router-dom'


function WelcomeComponent() {
    const { userName } = useParams()
    return (
        <div className='WelcomeComponent'>
            <h1>Hello {userName}</h1>
            <div>
                Manage your todos - <Link to='/todos'>Go Here</Link>
            </div>
        </div>
    )
}


export default WelcomeComponent
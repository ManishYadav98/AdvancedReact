import React from 'react'
import {Link} from 'react-router-dom'
function Error() {
    return (
        <div>
            <h1>Page not found 404</h1>
            {/* <a href='/'><h3>Back to Home</h3></a> */}
            <br></br>
            <br></br>
            <Link to='/' className='btn'><h3>Back to Home</h3></Link>
        </div>
    )
}

export default Error

import React from 'react'

function Userdashboard({match}) {
    return (
        <h1>{match.params.userId}</h1>
    )
}

export default Userdashboard

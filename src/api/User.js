export const getAllUsers = async () => {
    const response = await fetch('https://wavey-jam-a12-server.vercel.app/users?role=seller', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',

        },
    })
    console.log('test')
    const users = await response.json()

    return users
}

export const verifyStatus = async user => {
    delete user._id
    const response = await fetch(
        'https://wavey-jam-a12-server.vercel.app/users',
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('waveyToken')}`,
            },
            body: JSON.stringify({ ...user, status: 'verified' }),
        }
    )
    const users = await response.json()

    return users
}

export const deleteUsers = async id => {
    const response = await fetch(`https://wavey-jam-a12-server.vercel.app/users/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
        },
    })
    const result = await response.json()
    return result
}
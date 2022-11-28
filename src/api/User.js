export const verifyStatus = async user => {
    delete user._id
    const response = await fetch(
        `http://localhost:8000/users/${user?.email}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
            },
            body: JSON.stringify({ ...user, status: 'requested' }),
        }
    )
    const users = await response.json()

    return users
}
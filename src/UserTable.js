import React from 'react'

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map((user) => (
                        <tr>
                            <th>{user.name}</th>
                            <th>{user.userName}</th>
                            <th><button

                                id={user.id} onClick={() => (props.editUser(user))} className="button muted-button">Edit</button></th>
                            <th>
                                <button id={user.id} onClick={() => (props.userDelete(user.id))} className="button muted-button">Delete</button>
                            </th>
                        </tr>
                    ))
                ) :
                    <td colSpan="4">There are no users</td>
                }
            </tbody>
        </table>
    )
}

export default UserTable
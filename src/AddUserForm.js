import React, { useState } from 'react'

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: "", userName: "" }
    const [tempUser, setTempUser] = useState(initialFormState)

    const handleChange = (event) => {
        setTempUser({ ...tempUser, [event.name]: event.value })
    }
    return (
        <form action="">
            <label htmlFor="name">
                Name
               <input type="text" name="name" onChange={(event) => (handleChange(event.target))} value={tempUser.name} />
            </label>
            <label htmlFor="userName">
                User Name
               <input type="text" name="userName" value={tempUser.userName}
                    onChange={(event) => (handleChange(event.target))} />
            </label>
            <button onClick={(event) => {
                event.preventDefault();
                if (!tempUser.name || !tempUser.userName)
                    return
                props.addUser(tempUser)
                setTempUser(initialFormState)
            }}
                className="muted-button">Add new user</button>
        </form>
    )
}

export default AddUserForm

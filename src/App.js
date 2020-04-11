import React ,{useState} from 'react';
import './App.css'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'
const App=()=>{
  const userData=[
    
  ]
  const initialFormState={id:null,name:"",userName:" "}
  const [users,setUsers]=useState(userData)
  const [editMode,setEditMode]=useState(false)
  const [currentUser,setCurrentUser]=useState(initialFormState)

  const addUser=user=>{
    user.id=users.length+1
    setUsers([...users,user])
  }

  const editUser=user=>{
    setEditMode(true)
    setCurrentUser({ id: user.id, name: user.name, userName: user.userName })
  }

  const userDelete=(id)=>{
    setUsers(users.filter(user=>user.id!=id))
  }

  const updateUser=(id,updatedUser)=>{
    setEditMode(false)
    setUsers(users.map(user=>(user.id==id?updatedUser:user)))
  }

  return(
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
         {editMode? (
           <div>
              <h2>Edit User</h2>
              <EditUserForm setEditing={setEditMode}
                currentUser={currentUser}
                updateUser={updateUser} />
           </div>
         ):(
           <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} currentUser={currentUser} />
           </div>
         )} 
        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable users={users} editUser={editUser}  userDelete={userDelete} />
        </div>
      </div>
    </div>
  )
}


export default App;

import { useState } from 'react';
import {Link} from 'react-router-dom'
import AppContext from '../../context/AppContext.jsx'
import './index.css'



const AssignTask =() => {
    const [selectedUser, setSelectedUser] = useState('');
    const [task, setTask] = useState('');
    const [newUser,setNewUser]=useState('')
    
    
    return (
        
        <AppContext.Consumer>
            {value=>{
                const{users,onTaskAddition,createUser}=value
                
                const handleUserChange = (e) => {
                    setSelectedUser(e.target.value);
                    
                    };
                const handleSubmit = (e) => {
                    e.preventDefault();
                    setTask('')
                    setNewUser('')
                    setSelectedUser('')
                    onTaskAddition(selectedUser,task)
                    alert('Task Added')
                };

                const onClick=()=>{
                    setNewUser('')
                    createUser(newUser)
                    alert("New User Added")
                }

                return(
                    <div >
                        <h1>Create User or Assign Tasks</h1>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='task-input'>
                        <label htmlFor="task-inp">Enter the Task</label>
                        <input value={task} type="text" id="task-inp" onChange={e=>setTask(e.target.value)} required/>
                        </div>
                    
                    <div>
                    <label htmlFor="user">Assign to User:</label>
                    <select id="user" value={selectedUser} onChange={handleUserChange} required>
                        <option value="">Select User</option>
                        {users.map(user => (
                        <option key={user.id} value={user.name}>{user.name}</option>
                        ))}
                    </select>
                    </div>
                    
                    <button type="submit">Assign Task</button>
                    </form>

                    <form className='newUser'>
                    <label htmlFor='new-user'>Add New User:</label>
                    <input value={newUser} type="text" id="new-user" onChange={e=>setNewUser(e.target.value)} required/>
                    <button type="button" className='add-user-butt' onClick={onClick}>Add User</button>
                    </form>
                    <Link to="/">
                        <button className='top' type="button">Home</button>
                    </Link>
                    
                    </div>
                )
            }}
        </AppContext.Consumer>
        );
}

export default AssignTask;

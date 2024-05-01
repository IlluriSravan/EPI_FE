// import { useState } from 'react'
import AppContext from '../../context/AppContext.jsx'
import TaskItem from '../taskItem/TaskItem.jsx'
import './index.css'
import {Link} from 'react-router-dom'

const TaskStatus=()=>(
<AppContext.Consumer>
    {value=>{
        const {users,user,statusChange,taskEdit}=value
        
        const tasksList=users[user-1].tasks;
        
        let name=""
        users.forEach(each=>{
            console.log("NAME",each.id,user);
            if(each.id==user){
                
                name=each.name
            }
        })
        console.log(tasksList);
        const onClickComplete=id=>{
            console.log("Buuttt",id,user);
            statusChange(id,user)
        }
        const onEdit=(id,input)=>{
            console.log("EDI",id,user,input);
            taskEdit(id,user,input)
        }
        return(
            <div className='seec'>
            <h1>Tasks of {name}</h1>
            {tasksList.length===0?
            (
                <>
                <p>No Tasks to show</p>
                <Link to='/'>
            <button type="button" >Back</button>
        </Link>
                </>
                
            ):
            <>
            <ul>
                
            {tasksList.map(each=>(
                <TaskItem key={each.id} details={each} onEdit={onEdit} onClickComplete={onClickComplete}/>
))}
            </ul>
            <Link to="/">
                <button className='top' type="button">Home</button>
            </Link>
            </>
    }
            </div>
        )
    }
}
</AppContext.Consumer>
)


export default TaskStatus
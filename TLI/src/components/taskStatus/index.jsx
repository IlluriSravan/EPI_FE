// import { useState } from 'react'
import AppContext from '../../context/AppContext.jsx'
import TaskItem from '../taskItem/TaskItem.jsx'
import './index.css'
import {Link} from 'react-router-dom'

const TaskStatus=()=>(
<AppContext.Consumer>
    {value=>{
        const {users,user,statusChange,taskEdit}=value
        
        const tasksLi=users.filter(each=>each.name===user);
        const tasksList=tasksLi[0]?.tasks        
        let name=""
        users.forEach(each=>{
            if(each.name==user){
                name=each.name
            }
        })
        const onClickComplete=id=>{
            statusChange(id,user)
        }
        const onEdit=(id,input)=>{
            taskEdit(id,user,input)
        }
        return(
            <div className='seec'>
            <h1>Tasks of {name}</h1>
            {tasksList.length===0 || tasksList===undefined?
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
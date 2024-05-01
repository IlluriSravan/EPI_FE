import './index.css'
import PropTypes from 'prop-types'
import {useState} from 'react'
// import { MdEdit } from "react-icons/md";
// import { IoMdCheckmark } from "react-icons/io";

const TaskItem=({details,onClickComplete,onEdit})=>{
    const [editable,setEditable]=useState(true)
    
    
    console.log("item",details);
    const{id,task,status}=details 
    const [input,setInput]=useState(`${task}`)
    
    console.log("STTT",typeof status);
    let buttonText= 'Complete'
    
    const statusClass=status==='Incomplete'?'incomplete':'complete'
    const onEditTask=()=>{
        console.log("ONEDit");
        onEdit(id,input)
        setEditable(pre=>!pre)
    }
    const onClick=()=>{
        onClickComplete(id)
        
    }
    const onChangeInput=e=>{
        setInput(e.target.value)
    }
    const onClickEdit=()=>{
        setEditable(pre=>!pre)
        
    }
    
    
    return(
        <>
        <li>
            <div>
           



                {editable===true?
            (
            < div className='editt'>
            <p>{task}</p>
            <button className="edit-but" type="button" onClick={onClickEdit}>Edit</button>
            
            
        </div>)   :
            (<div className='editt'>
                <input  className="edit-input" type="text" onChange={e=>onChangeInput(e)}/>
                <button className="edit-but" type="button" onClick={onEditTask}>Save</button>
                </div>
            )
            }
            
            
            
            
            
            
            </div>
            <p className={`${statusClass}`}>{status}</p>
            <button type="button" className={` butt `} onClick={onClick}>{buttonText}</button>
        </li>
        </>
    )
}

TaskItem.propTypes = {
    details: PropTypes.object.isRequired,
    onClickComplete:PropTypes.func,
    onEdit:PropTypes.func
  }
export default TaskItem
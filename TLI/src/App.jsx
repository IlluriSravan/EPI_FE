import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home/index.jsx'
import AssignTask from './components/assignTask/index.jsx'
import TaskStatus from './components/taskStatus/index.jsx'
import AppContext from './context/AppContext.jsx'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'


function App() {
  const usersData = [
    { id: 1, name: 'John Doe',tasks:[{id:1,task:'do',status:"Incomplete"},{id:2,task:'do',status:"Incomplete"}] },
    { id: 2, name: 'Jane Smith',tasks:[] },
  ];
  
  let count=3
  const [users,setUsers]=useState(usersData)
  const[user,setUser]=useState()
  
  const onTaskAddition=(selectedUser,task)=>{
    
  const updatedUsers=users.map(eachUser=>{
    const newTask={id:uuidv4(),task,status:'Incomplete'}
    
    if(eachUser.name===selectedUser){
      const prevTasks=eachUser.tasks
        const tasks=[...prevTasks,newTask]
        return {...eachUser,tasks}
    }
    return{...eachUser}
  }) 
  setUsers(updatedUsers)
  }
  
  const onChangeUser=user=>{
    setUser(user)
  }

  const statusChange=(id,user)=>{
    const filteredTasks=users.filter(each=>each.name===user)[0].tasks
    const updatedTasks=filteredTasks.map(each=>{
      if(each.id===id){
        return{...each,status:'Complete'}
      }
      return {...each}
    })
    const updatedUsers=users.map(each=>{
      if(each.name===user){
        return{...each,tasks:updatedTasks}
      }
      return {...each}
    })
    
    setUsers(updatedUsers)
  }

  const taskEdit=(id,user,input)=>{
    const filteredTasks=users.filter(each=>each.name===user)[0].tasks
    const updatedTasks=filteredTasks.map(each=>{
      if(each.id==id){
        return{...each,task:input}
      }
      return {...each}
    })
    const updatedUsers=users.map(each=>{
      if(each.name===user){
        return{...each,tasks:updatedTasks}
      }
      return {...each}
    })
    setUsers(updatedUsers)
  }
  
  const createUser=(newUser)=>{
      const newEntry={id:count,name:newUser,tasks:[]}
      setUsers(pre=>[...pre,newEntry])
      count+=1
  }
  
  return (
    <>
      <BrowserRouter>
      <AppContext.Provider value={{users,user,onTaskAddition,statusChange,taskEdit,createUser}}>
        <Routes>
          
          <Route exact path="/" element={<Home onChangeUser={onChangeUser} users={users}/>}/>
          <Route exact path="/assignTask" element={<AssignTask  />}/>
          <Route exact path="/taskStatus" element={<TaskStatus />}/>
          
          </Routes>
          </AppContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App

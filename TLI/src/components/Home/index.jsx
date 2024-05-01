
import {Link} from 'react-router-dom'
import './index.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import AppContext from '../../context/AppContext'

const Home=(props)=>{
    const[user,setUser]=useState(0)
    // const [messageView,setMessageView]=useState(false)
    
            return(
                <AppContext.Consumer>
        {value=>{
            const{onChangeUser}=props
            const{users}=value
            const bool=user=='' || user>users.length
                // let length=users.length 
                // if(user>length || user==""){
                //     setMessageView("true")
                // }
            console.log("hello home");
            const change=(e)=>{
                setUser(e.target.value)
                onChangeUser(e.target.value)
            }
            const head="Check out Tasks' Status of Selected User"
            return(
                <>
                <h1>Assign and View Tasks</h1>
                <div className='home'>
                <div >
                <Link to='/assignTask'>
                    <button type="button" >Assign Tasks</button>
                </Link>
                </div>
                <div className='home2'>
                <input className='home-input' type="text" placeholder='Enter serial number of user'  onChange={e=>change(e)}/>
                {bool?
                (<p className='msg'>*User Does not Exit</p>):
                (<>
                <Link to='/taskStatus'>
                    <button type="button" >{head}</button>
                </Link>
                </>)
                }
                
                </div>
                </div>
                </>
            )
        }}
    </AppContext.Consumer>
            )
}
Home.propTypes = {
    onChangeUser: PropTypes.func.isRequired,
    
  }
export default Home
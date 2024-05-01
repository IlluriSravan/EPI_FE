import {Link} from 'react-router-dom'
import './index.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import AppContext from '../../context/AppContext'

const Home=(props)=>{
    const[user,setUser]=useState(0)
    
    return(
        <AppContext.Consumer>
            {value=>{
                const{onChangeUser}=props
                const{users}=value
                const bool=users.forEach(each=>{
                    if(each.name===user){
                        return true
                    }
                        return false
                })

                const change=(e)=>{
                    setUser(e.target.value)
                    onChangeUser(e.target.value)
                }
                const head="Check out Tasks"
                return(
                    <>
                    <h1>Assign and View Tasks</h1>
                    <div className='home'>
                        <div >
                            <Link to='/assignTask'>
                                <button className='buyt' type="button" >Assign Tasks</button>
                            </Link>
                        </div>
                        <div className='home2'>
                            <div className='home3'>
                                <label htmlFor="user">Select User</label>
                                <select id="user" value={user} onChange={e=>change(e)} >
                                    <option value="">Select User</option>
                                    {users.map(user => (
                                    <option key={user.id} value={user.name}>{user.name}</option>
                                    ))}
                                </select>
                            </div>
                            <Link to='/taskStatus'>
                                <button className='buy' type="button" disabled={bool}>{head} </button>
                            </Link>
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
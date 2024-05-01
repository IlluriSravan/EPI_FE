import React from 'react'

const CartContext = React.createContext({
users: [],
user:'',
onTaskAddition: () => {},
statusChange:()=>{},
taskEdit:()=>{},
createUser:()=>{}
})

export default CartContext
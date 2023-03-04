import React from 'react'
import User from './User'
import { useDispatch } from 'react-redux'
import {Delete} from '../Store/action'
import {useParams, Link} from 'react-router-dom'
import {  useSelector } from 'react-redux'

export default function Session() {
    const users=useSelector(data=>data)
    const { id } = useParams()
    const dispatch = useDispatch()

    const user=users.find(u=>u.id===parseInt(id))

    const handleSupprimer=(e)=>{
            dispatch(Delete(e.target.value))
    }
  return (
    <div>
    {user.id!==1?
        <div>
            Login:{user.username}
            <center>
                <h1>Welcome {user.username}</h1>
            </center>
        </div>
    :
       <table> 
       <thead>
        <tr>
            <th>id</th>
            <th>username</th>
            <th>Email</th>
            <th>Genre</th>
            <th>Pay</th>
            <th>Action</th>
        </tr>
       </thead>
       <tbody>
       {users.map((u,i)=><User key={u.id} usr={u} Supprimer={handleSupprimer}/>)}
       </tbody>
       </table>
    }
    <Link to={'/'}>Login</Link>
    </div>
  )
}

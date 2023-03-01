import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {Update} from '../Store/action'
import {  useParams,Link,useNavigate } from 'react-router-dom'

export default function Modifier(){
    const { id } = useParams()
    const users=useSelector(data=>data)
    

    const [user,setuser]=useState(users.find(u=>u.id===parseInt(id)))
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleonchange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }

    const Modifier=(e)=>{
        e.preventDefault()
        dispatch(Update(user))
        navigate(`/Session/${1}`)
    }

  return (
    <div>
        <h1>Modifier</h1>
        <form onSubmit={Modifier}>
        <table>
        <thead>
            <tr>
                <td>User Name</td>
                <td><input  type={'text'} onChange={handleonchange} value={user.username}  name={'username'} /></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input  type={'email'} onChange={handleonchange}  value={user.email}   name={'email'} /></td>
            </tr>
            <tr>
                <td>Age</td>
                <td><input  type={'number'} onChange={handleonchange} value={user.Age}    name={'Age'} /></td>
            </tr>
            <tr>
                <td><input  type={'radio'} onChange={handleonchange}     name={'genre'} value={'femme'} />Femme</td>
                <td><input  type={'radio'} onChange={handleonchange}     name={'genre'} value={'homme'} />Homme</td>
            </tr>
            <tr>
                <td>Pays de residence</td>
                <td>
                <select name='pay'  onChange={handleonchange}>
                    <option value={'Maroc'}>Maroc</option>
                    <option value={'France'}>France</option>
                </select>
                </td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type={'password'} onChange={handleonchange}  value={user.password}   name={'password'} /></td>
            </tr>
            <tr>
                <td colSpan={2}><input type={'button'} onClick={Modifier}  value={'Modifier'}/></td>
            </tr>
            </thead>
        </table>
        <Link to={`/Session/${1}`}>Login</Link>
        </form>
    </div>
  )
}

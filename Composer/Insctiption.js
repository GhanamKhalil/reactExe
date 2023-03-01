import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {Add} from '../Store/action'

export default function Insctiption() {
    const [user,setuser]=useState({id:0,username:'',email:'',Age:'',genre:'',pay:'Maroc',password:''})
    const dispatch = useDispatch()

    const handleonchange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }

    const Ajouter=(e)=>{
        e.preventDefault()
        dispatch(Add(user))
    }
    
  return (
    <div>
    <form onSubmit={Ajouter}>
        <table>
        <thead>
            <tr>
                <td>User Name</td>
                <td><input  type={'text'} onChange={handleonchange}  name={'username'} /></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input  type={'email'} onChange={handleonchange}  name={'email'} /></td>
            </tr>
            <tr>
                <td>Age</td>
                <td><input  type={'number'} onChange={handleonchange}  name={'Age'} /></td>
            </tr>
            <tr>
                <td><input  type={'radio'} onChange={handleonchange}  name={'genre'} value={'femme'} />Femme</td>
                <td><input  type={'radio'} onChange={handleonchange}  name={'genre'} value={'homme'} />Homme</td>
            </tr>
            <tr>
                <td>Pays de residence</td>
                <td>
                <select name='pay' onChange={handleonchange}>
                    <option value={'Maroc'}>Maroc</option>
                    <option value={'France'}>France</option>
                </select>
                </td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type={'password'} onChange={handleonchange}  name={'password'} /></td>
            </tr>
            <tr>
                <td colSpan={2}><input type={'submit'} onClick={Ajouter}  name={'pass'} /></td>
            </tr>
            </thead>
        </table>
        <Link to={'/'}>Login</Link>
        </form>
    </div>
  )
}

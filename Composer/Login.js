import React, { useState } from 'react'
import { useNavigate,Link} from 'react-router-dom'
import {  useSelector } from 'react-redux'

export default function Login(){
  const navigate = useNavigate()

  const users=useSelector(data=>data)

  const [user,setuser]=useState({username:'',password:''})




  const handleonchange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
  }

  const Login=()=>{
    let test=users.find(u=>u.username===user.username&&u.password===user.password)
    if(test!==undefined){
      if(test.username==='Admin' && test.password==='Admin')
      {
        navigate(`/Session/${1}`)
      }
      else{
          // let test=users.find(u=>u.username===user.username&&u.password===user.password)

          navigate(`/Session/${test.id}`)
        }
    }
  }

  return (
    <div>
    {/* {userr.length===0?true:<Session user={userr}/>} */}
      <center>
      <h1>Login</h1>
      <table>
        <thead>
            <tr>
                <td>Login</td>
            </tr>
            <tr>
                <td><input type={'text'} onChange={handleonchange} name={'username'}/></td>
            </tr>
            <tr>
                <td>Password</td>
            </tr>
            <tr>
                <td><input type={'password'} onChange={handleonchange} name={'password'}/></td>
            </tr>
            <tr>
                <td><input type={'submit'} value={'Login'} onClick={Login}/></td>
            </tr>
        </thead>
      </table>
      <Link to={'/Inscription'}>Inscription</Link>
      </center>

       
    </div>
  )
}

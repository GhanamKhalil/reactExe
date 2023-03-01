import React from 'react'
import { Link} from 'react-router-dom'

export default function User({usr,Supprimer}) {
  return (
    <tr>
            <td>{usr.id}</td>
            <td>{usr.username}</td>
            <td>{usr.email}</td>
            <td>{usr.genre}</td>
            <td>{usr.pay}</td>
            <td>
                <Link to={`/Modifier/${usr.id}`}>
                    <input type={'button'} value={'Modifier'} />
                </Link> 
                <button type='button' onClick={Supprimer} value={`${usr.id}`}>
                    Supprimer
                </button>
            </td>
    </tr>
  )
}

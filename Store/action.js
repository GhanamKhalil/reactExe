export const Add=(personne)=>{
return {type:'Add',personne:personne}
}

export const Delete=(id)=>{
    return {type:'delete',id:id}
}

export const Update=(user)=>{
    return {type:'modifier',user:user}
}
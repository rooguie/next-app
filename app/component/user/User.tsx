import React from 'react'
import { userType } from '@/app/type/user'

type userProps = {
    user: userType;
    onRemove: (id:number)=>void
}

export default function User({ user,onRemove }: userProps) {
    return (
        <div>
            <b >{user.id}. {user.username}</b> <span className='mr-2'>({user.email})</span>
            <button className='hover:cursor-pointer' onClick={()=>{onRemove(user.id)}}>❌</button>
        </div>
    )
}

import React from 'react'
import { userType } from '@/app/type/user'

type userProps = {
    user: userType;
    onRemove: (id:number)=>void
    onToggle: (id:number)=>void
}

export default function User({ user,onRemove,onToggle }: userProps) {
    return (
        <div>
            <b className={`${user.active ? 'text-red-500' : 'text-black'}`} onClick={()=>onToggle(user.id)}>
                {user.id}. {user.username}
            </b> 

            <span className='mr-2'>
                ({user.email})
            </span>

            <button className='hover:cursor-pointer' 
            onClick={()=>{onRemove(user.id)}}>❌
            </button>
        </div>
    )
}

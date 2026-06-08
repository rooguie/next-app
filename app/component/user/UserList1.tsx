import React from 'react'
import User from './User';
import { userType } from '@/app/type/user'

type userProps = {
    users: userType[];
    onRemove: (id: number) => void
}

export default function UserList1({ users, onRemove }: userProps) {
    return (
        <div>{
            users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))
        }

        </div>
    )
}

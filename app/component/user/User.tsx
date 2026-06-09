import { userType } from '@/app/type/user'

type userProps = {
    user: userType;
    onRemove: (id:number)=>void
    onToggle: (id:number)=>void
}

export default function User({ user,onRemove,onToggle }: userProps) {
    return (
        <div>
            {/* {()=>onToggle(user.id)} 함수 실행 라인 */}
            <b className={`${user.active ? 'text-red-500' : 'text-white'} hover:cursor-pointer`} onClick={()=>onToggle(user.id)}>
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

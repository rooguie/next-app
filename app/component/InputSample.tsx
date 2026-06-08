import React, { useState } from 'react'

export default function InputSample() {
    //input 값이 변경되면 input value속성의 값이 업데이트 되야함.
    //useState 관리
    const [text, setText] = useState(''); //문자 타입 초기설정 값 빈값

    //e: event 발생하는 대상의 객체
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        // name=key / value=value
        setText(e.target.value);
    }

    return (
        <div className='m-5'>
            <input className='border border-white-300 p-2' type="text" name='text' value={text} onChange={onChange}/>
            <button className='px-4 py-2 ml-3 bg-blue-500 text-white' onClick={()=>setText('')}>reset</button>
        </div>
    )
}

import React from 'react'

export default function Hello() {

    // jsx => react의 확장자(HTML+js를 혼용하는 문법)
    // jsx + typeScript => tsx / ts(타입정의)
    // typeScript => js에서 타입을 확인하는 문법 추가(컴파일) 미리 타입을 정함.
    return (
        <div>Hello.tsx Area</div>
    )
}

//=> 똑같음
// function Hello() {
//   return (
//     <div>Hello</div>
//   )
// }

// export default Hello

// const Hello2=()=>{
//     return(
//         <div></div>
//     )
// }

// export default Hello2
import React from 'react'
//type, interface
interface HelloPropsType {
    name: String;
    age: number;
}

export default function HelloProps({ name, age }:HelloPropsType) {
    return (
        <div>HelloProps.tsx Area {name} / {age}</div>
    )
}

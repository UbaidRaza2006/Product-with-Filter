import React, { useState } from 'react'

export default function Class () {
const [name1,setname1]= useState('')
const [age1,setage1]= useState('')
const [course1,setcourse1]= useState('')
const [a,seta]= useState([
    {
name:name1,
age:age1,
course:course1  }
])

const add = () => {
    // console.log('Function',a);
    
if(!name1 || !age1 || !course1){

}else{
    // let name=name1
    // let age=age1
    // let course=course1

    // name=name1
    // age=age1
    // course=course1
    seta([{name:name1,age:age1,course:course1}, ...a])
    console.log(a);
    setname1('')
    setage1('')
    setcourse1('')
}

//     if(!name1){

//     }else{
//         setitems( [...items,name1])
//         setname('')
//         console.log(items);
//     }
//     if(!age){

//     }else{
//         setitems2( [...items2,age])
//         setage('')
// console.log(items2);
//     }
//     if(!course ){

//     }else{
//         setitems3( [...items3,course])
//         setcourse('')
//     console.log( items3);
//     }
}

  return (
<>
<input type="text" name='name' placeholder='Your Name' value={name1} onChange={(e)=>{setname1(e.target.value)}}/>
<input type="number" name='age' placeholder='Your Age' value={age1} onChange={(e)=>{setage1(e.target.value)}}/>
<input type="text" name='course' placeholder='Your Course' value={course1} onChange={(e)=>{setcourse1(e.target.value)}}/>
<button onClick={()=>{add(name1,age1,course1)}}>Add</button>

<div>
   {
    a.map(( elem, ind)=>{
        return(
            <>
            <h1>{elem.name}</h1>
            <h4>{elem.age}</h4>
            <h4>{elem.course}</h4><hr /></>
        )
    })}
    
</div>
</>
    )}
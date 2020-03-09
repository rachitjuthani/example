export const student =async () =>{
    await fetch('')
}




import React, { useState, useEffect } from 'react';

const Student = (props) =>{
    const [students,setStudents] = useState(null);
    useEffect(async ()=>{
        const students = await getStudents();
        setStudents(students);
    })

    return(
        <h1></h1>
    )

}



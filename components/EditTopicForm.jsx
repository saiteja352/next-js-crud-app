'use client'
import React,{useState} from 'react'
import '../app/globals.css'
import { useRouter } from 'next/navigation';

export default function EditTopicForm({id,title,description}) {
    const[newTitle,setNewTitle]=useState(title);
    const[newDescription,setNewDescription]=useState(description)
    const router=useRouter()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await fetch(`http://localhost:3000/api/topics/${id}`,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json',
                },
                body:JSON.stringify({newTitle,newDescription})
            })
            if(res.ok){
                router.push('/')
            }
        }
        catch(error){
            console.log(error)
        }

    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Edit Topic</label><br/>
        <input type="text" id="topic" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/><br/>
        <label>Edit Description</label><br/>
        <input type="text" id="description" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/><br/><br/>
        <button type="submit">Update Topic</button>
    </form>
  )
}

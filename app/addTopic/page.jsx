'use client'
import React,{useState} from 'react'
import '../globals.css'
import { useRouter } from 'next/navigation';

export default  function Page() {
  const[title,setTitle]=useState('');
  const[description,setDescription]=useState('')
  const router=useRouter()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(title);
    console.log(description)
    if(title.length>0 && description.length>0){
      try{
        const res= await fetch('http://localhost:3000/api/topics',{
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body: JSON.stringify({title,description})
        })
        if(res.ok){
          router.push('/')
        }
      }
      catch(error){
        console.log('error')
      }
      
    }
    setTitle('');
    setDescription('')
  }
  return (
    <>
     <form onSubmit={handleSubmit}>
        <label>Add Topic</label><br/>
        <input type="text" id="topic" value={title} onChange={(e)=>setTitle(e.target.value)}/><br/>
        <label>Add Description</label><br/>
        <input type="text" id="description" value={description} onChange={(e)=>setDescription(e.target.value)}/><br/><br/>
        <button type="submit">Save</button>
    </form>
    </>
  )
}

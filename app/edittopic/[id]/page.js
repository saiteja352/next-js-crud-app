import React from 'react'
import EditTopicForm from '@/components/EditTopicForm'

const getTopicById= async(id)=>{
    try{
        const res= await fetch(`http://localhost:3000/api/topics/${id}`,{cache:'no-store'})
        return res.json()
    }
    catch(error){
        console.log(error)
    }
}

export default async function UpdatePage({params}) {
    const {id} = params;
    const {topic}=await getTopicById(id);
    const {title,description}=topic
  return (
    <>
    <EditTopicForm id={id} title={title} description={description}/>
    </>
  )
}

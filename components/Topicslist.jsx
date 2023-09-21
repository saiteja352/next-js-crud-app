import Link from 'next/link'
import React from 'react'
import {HiPencilAlt} from 'react-icons/hi'
import RemoveBtn from './RemoveBtn'
import './Topiclist.css'

const getTopics= async()=>{
    try{
        const res = await fetch('http://127.0.0.1:3000/api/topics',{cache:'no-store'})
        return res.json()
    }
    catch(error){
        console.log(error)
    }
}

export default async function Topicslist() {
    const {topics} = await getTopics();
  return (
       <>
       {topics && topics.map((value)=>(
       <div key={value._id} className="topic-list">
               <div className="topic-details">
                <h2 className="topic-title">{value.title}</h2>
                <div className="topic-description">{value.description}</div>
       </div>
        <div className="topic-actions">
            <RemoveBtn id={value._id}/>
          <Link href={`edittopic/${value._id}`}>
            <HiPencilAlt size={24}/>
          </Link>
        </div>
    </div>))}
       </>
  )
}

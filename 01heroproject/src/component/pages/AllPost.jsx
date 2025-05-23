import React,{useState,useEffect} from 'react'
import {Container ,Postcard} from '../components'
import appwriteService from "../appwrite/config"

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
       

  return (
    <div className='w-full py-8'>
        <div className=' flex flex-wrap'>
            {posts.map((post)=> (
                <div key= {post.$id} className='p-2 w-1/4'>
                    <Postcard post = {post}/> 
                        
                </div>
            ))}

            
        </div>
       
            
    </div>
  )
}

export default AllPost
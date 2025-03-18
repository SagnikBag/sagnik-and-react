import React, {useEffect,useState} from 'react'

function Github() {
    const [data,setData] = useState([])
 useEffect(() => {
    fetch('https://github.com/hiteshchoudhary')
    .then(response => response.json())
    .then(data => console.log(data))
    setData(data)
 },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white'>
        Github followers :{data.follower}
        <img src="{data.avatar_url}" alt="Git picture" />
         </div>
         
  )
}

export default Github

export const githubInfo = async() => {
   const  response = await fetch("https://github.com/hiteshchoudhary")
   return response.json()
}
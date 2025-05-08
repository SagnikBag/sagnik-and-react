import { useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authslice'
import { Header,Footer } from './component'


import './App.css'

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])
  
  

 return !loading ? (
  <div className='w-full bg-gray-400'>
    <div className='w-full block'>
        <Header/>
        <main>
          {/* <outlet/> */}hi
        </main>
        <Footer/>
    </div>
  </div>
 ) : null
}

export default App

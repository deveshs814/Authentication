import React , {useEffect} from 'react'
import axios from 'axios'
import { useFetcher, useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() =>{
        axios.get('http://localhost:3000/auth/verufy')
        .then(res => {
            if(res.data.status){

            }else{
                navigate('/')
            }
        })
    } , [])
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard



import React from 'react'
import { useNavigate } from 'react-router-dom'

import image from '../images/WelcomeImg.jpg'


import '../styles/home.css'

const Home = () => {

    let navigate = useNavigate()

  return (

<>

<div  id='home'  onClick={()=> navigate("/pokemon")}  >


<img src={`${image}`}  alt="image" />
<h1  id='go' >go</h1>

</div>
</>
  )
}

export default Home
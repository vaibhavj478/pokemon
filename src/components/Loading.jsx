

import React from 'react'
import {BiLoader} from "react-icons/bi";
import '../styles/loading.css'

const Loading = () => {
  return (
    <div className='container' >

            <div className='card' ><BiLoader/></div>
            <div className='card' ><BiLoader/></div>
            <div className='card' ><BiLoader/></div>
            <div className='card' ><BiLoader/></div>
            <div className='card' ><BiLoader/></div>
            <div className='card' ><BiLoader/></div>
            <div className='card' ><BiLoader/></div>
            <div className='card' ><BiLoader/></div>


    </div>
  )
}

export default Loading
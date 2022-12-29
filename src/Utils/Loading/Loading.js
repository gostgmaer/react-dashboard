import React from 'react'
import Spinner from 'react-spinkit'
import'./loading.scss'

const Loading = () => {
  return (
    <div className='Loading'>
      <div className='loadingWrapper'> <Spinner name='pacman'></Spinner></div>
      
    </div>
  )
}

export default Loading
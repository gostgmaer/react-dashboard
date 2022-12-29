import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import Spinner from 'react-spinkit'
import'./loading.scss'

const Loading = () => {
  return (
    <div className='Loading'>
      <div className='loadingWrapper'> <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#fff" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
visible={true}
 /></div>
      
    </div>
  )
}

export default Loading
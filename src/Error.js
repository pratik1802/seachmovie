import React from 'react'
import {useParams} from 'react-router-dom'

const Error = () => {
    const {id}=useParams();

  return (
    <div>Error </div>
  )
}

export default Error
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {
  const parameters = useParams();

  console.log(parameters)
  
  return (
    <h1> Post {parameters.id}</h1>
  )
}

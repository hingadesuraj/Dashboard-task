import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({title,path}) => {
  return (
    <div>
        <li className=" border-b-2 text-center justify-start ">
          <Link to={`/${path}`}>{title}</Link>
        </li>
    </div>
  )
}

export default Links
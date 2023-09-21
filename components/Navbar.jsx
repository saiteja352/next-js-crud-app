import React from 'react'
import Link from 'next/link'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link href={"/"} >Basic CRUD Operations</Link>
        <Link href={'/addTopic'} >Add Topic</Link>
    </nav>
  )
}

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navbar = () => {
    const path=usePathname()
    const NavLinks=[
        {title:'Dashboard',href:'/dashboard'},
        {title:'Issues',href:'/issues'}
    ]
    
  return (
    <nav className='flex space-x-4 border-b p-3 h-14 items-center shadow-sm'>
        <Link href='/'>Logo</Link>
        <div className='flex space-x-4'>
            {NavLinks.map((link)=>(
            <Link className={`${link.href==path?'text-zinc-900':'text-zinc-500'} transition-colors hover:text-zinc-800`}  key={link.href} href={link.href}>{link.title}</Link>
            ))}
        
        </div>
    </nav>
  )
}

export default navbar
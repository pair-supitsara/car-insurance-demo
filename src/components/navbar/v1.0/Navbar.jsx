'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useRef, useState } from 'react'
import './Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)

    const toggleMenu = () => {
        setOpen(prev => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            menuRef.current &&
            !menuRef.current.contains(event.target)
          ) {
            setOpen(false)
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <nav ref={menuRef} className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Example</a>
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link className="nav-link active" href="/" onClick={() => setOpen(false)}>
                        Home
                    </Link>
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" onClick={toggleMenu} role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                        <ul className={`dropdown-menu ${open ? 'show' : ''}`}>
                            <Link className="dropdown-item" href="/action" onClick={() => setOpen(false)}>
                                Action1
                            </Link>
                            <Link className="dropdown-item" href="/action" onClick={() => setOpen(false)}>
                                Action2
                            </Link>
                            <Link className="dropdown-item" href="/action" onClick={() => setOpen(false)}>
                                Action3
                            </Link>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}
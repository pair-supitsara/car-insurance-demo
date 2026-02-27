'use client'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'

const arrayTopicOffcanvas = [
    {
        name: "promotion",
        topic: "โปรโมชั่น",
        icon: "bi bi-headset",
        color: "blue"
    },
    {
        name: "prominent",
        topic: "จุดเด่นบริษัทประกัน",
        icon: "bi bi-award",
        color: "blue"
    },
    {
        name: "lineframe",
        topic: "LINE",
        icon: "bi bi-award",
        color: "green"
    },
    {
        name: "salescript",
        topic: "Script ช่วยขาย",
        icon: "bi bi-award",
        color: "blue"
    },
    {
        name: "customerprofile",
        topic: "ข้อมูลลูกค้า",
        icon: "bi bi-award",
        color: "blue"
    },
    {
        name: "FAQ",
        topic: "คำถามที่พบบ่อย",
        icon: "bi bi-award",
        color: "blue"
    },
    {
        name: "othertool",
        topic: "เครื่องมืออื่นๆ",
        icon: "bi bi-award",
        color: "blue"
    }
]

export default function Offcanvas({ open, name, children }) {
    const menuRef = useRef(null)

    const dispatch = useDispatch()
    const fnClose = () => dispatch({ type: 'ui/closeOffcanvas' })

    /*useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            menuRef.current &&
            !menuRef.current.contains(event.target)
          ) {
            fnClose()
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])*/

    let item = arrayTopicOffcanvas.filter((item) => name === item.name)/* default value can be ... next time */
    if (item.length > 0) {
        item = item[0]
    } else {
        return
    }

    return (
         <>
            {item && <div className={`offcanvas offcanvas-end ${open ? 'show' : ''}`}>
                <div className={`offcanvas-header bg-${item.color} text-white`}>
                    <h5 className="offcanvas-title" >
                        <i className={item.icon}></i>
                        { item.topic }
                    </h5>
                    <button type="button" className="btn-close" onClick={fnClose}></button>
                </div>
                <div className="offcanvas-body">
                    { children }
                </div>
            </div>}
        </>
    );
}
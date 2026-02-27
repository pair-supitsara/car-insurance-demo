"use client"

import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import { fnApiNodeRedPostDynamicUrl } from '@/utils/@lib/api.js'

export default function AppInitializer({ children }) {
    const [dynamicStatus, setDynamicStatus] = useState("idle")
    const dispatch = useDispatch()
    const setDynamicUrl = (obj) => dispatch({ type: 'dynamicurl/setDynamicUrl', payload: obj })
    const dynamicurl = useSelector(s => s.dynamicurl.dynamicurl)

    useEffect(() => { /* fetch only when first load..  */
        if (dynamicurl) return

        async function init() {
            /* call api dynamic url */
            setDynamicStatus('idle')
            fnApiNodeRedPostDynamicUrl('https://localhost:3000/', '3000', function (error, response) {
                if (error) {
                    setDynamicStatus('error')
                } else {
                    setDynamicStatus('ready')
                    const objDynamicurl = response.result.data
                    setDynamicUrl(objDynamicurl)
                }
            })
        }
        init();
    }, [])

    if (dynamicStatus !== 'ready') {
        return <div>loading......</div>  // 👈 กัน render ส่วนอื่น
    }
    return children
}
"use client"

import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react"
import { fnApiNodeRedPostDynamicUrl } from '@/utils/@lib/api.js'
import Loader from '@/components/Loader/v1.0/Loader'

export default function AppInitializer({ children }) {
    const [dynamicStatus, setDynamicStatus] = useState("idle")
    const dispatch = useDispatch()
    const fnSetParams = (obj) => dispatch({ type: 'params/setParams', payload: obj })
    const setDynamicUrl = (obj) => dispatch({ type: 'dynamicurl/setDynamicUrl', payload: obj })
    const dynamicurl = useSelector(s => s.dynamicurl.dynamicurl)
    
    /*http://192.168.0.2/silkspan_ssl/car_insurance_v2/index.asp
    ?predictive_id=0&predictive_type=&color=Blue&username=ski105&usersup=
    &tablename=outbound_renew&tid=1260000035&obruuid=B87BD561-C19B-41D1-A294-B3E63FCB4BDF
    &callcom=sk&operation_id=8C626595-4DC7-41F1-ABF2-F4C29AF2C3D4-0651
    &control_host=192.168.0.93&allowSkip=&listName=&lavcid=&fromBasket=
    &apptype=new&apitype=new&callbackid=&isscpn=n&ulogin=ski105&isautocall=0
    */
    const searchParams = useSearchParams();
    console.log('searchParams')
    const { color, username, usersup, tid, tablename, ulogin } = Object.fromEntries(searchParams);
    useEffect(() => {
        fnSetParams({ color, username, usersup
            , listid: tid
            , listtable: tablename
            , ulogin })
    }, [])

    useEffect(() => { /* fetch only when first load..  */
        if (dynamicurl) return

        async function init() {
            /* call api dynamic url */
            try {
                setDynamicStatus('idle')
                const response = await fnApiNodeRedPostDynamicUrl(`https://${location.host}/`, location.port)
                const objDynamicurl = response.result.data
                setDynamicUrl(objDynamicurl)
                setDynamicStatus('ready')
            } catch (error) {
                setDynamicStatus('error')
            }
        }
        init();
    }, [])

    if (dynamicStatus !== 'ready') {
        return <Loader />  // 👈 กัน render ส่วนอื่น
    }
    return children
}
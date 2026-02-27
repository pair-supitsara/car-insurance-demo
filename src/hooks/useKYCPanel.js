import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import { fnAPIPostProxy } from '@/utils/@lib/api.js'
import keys from '@/utils/keys.js'

export function useKYCPanel() {
    const [kycData, setKYCData] = useState([])
    const [kycStatus, setKYCStatus] = useState("idle")
    const token = useSelector(s => s.dynamicurl.token)
    const dynamicurl = useSelector(s => s.dynamicurl.dynamicurl)
    
    useEffect(() => { /* fetch only when first load..  */
        if (kycData.length > 0) return
        
        async function init() {
            setKYCStatus("loading")
            /* fnGetInsurBefore */
            var data = {
                "command":"getinsurbefore",
                "timestamp": String(new Date().getTime())
            }
            await fnAPIPostProxy(dynamicurl.apis.apiproxy + '/proxy/v1.0', data, token, keys.carinsurance.fnGetInsurBefore, "", function (err, res) {
                if (err) {
                    console.log(err)
                    setKYCStatus("error")
                } else {
                    setKYCStatus("ready")
                    console.log("fnGetInsurBefore")
                    console.log(res.result.data)
                    setKYCData(res.result.data)
                }
            })
        }
        init()
    }, [])

    return {
        kycData,
        kycStatus
    }
}
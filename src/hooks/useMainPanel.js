import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fnAPIGetProxy, fnApiNodeRedPostDynamicUrl } from '@/utils/@lib/api.js'
import keys from '@/utils/keys.js'

export function useMainPanel() {
    const [introMessage, setIntroMessage] = useState("")
    const [profileStatus, setProfileStatus] = useState("idle")
    const [introStatus, setIntroStatus] = useState("idle")
    
    const token = useSelector(s => s.dynamicurl.token)
    const dynamicurl = useSelector(s => s.dynamicurl.dynamicurl)
    
    const dispatch = useDispatch()
    const fnSetCustProfile = (obj) => dispatch({ type: 'customer/setcustprofile', payload: obj })
    
    useEffect(() => { 
        if (!(profileStatus && introStatus)) return

        async function init() {
            /* call api dynamic url */
            if (dynamicurl) {
                /* customer profile */
                var data = {
                    'command': 'getIntroCustprofile',
                    'listTable': 'outbound_renew',
                    'listID': '1260000195',
                    'userlogin': 'ski105',
                    timestamp: String(new Date().getTime())
                }
                setProfileStatus('idle')
                fnAPIGetProxy(dynamicurl.apis.apiproxy + '/proxy/v1.0', data, token, keys.carinsurance.fnGetIntroCustprofile, "", function (err, res) {
                    if (err) {
                        console.log(err)
                        setProfileStatus('error')
                    } else {
                        setProfileStatus('ready')    
                        console.log("fnGetIntroCustprofile")
                        console.log(res.result.data[0])
                        fnSetCustProfile(res.result.data[0])
                        
                    }
                })
    
                /*intro message */
                var data = {
                    'command': 'getintromessage',
                    'listTable': 'outbound_renew',
                    'listID': '1260000195',
                    'listcolor': 'blue',
                    'agentname': 'Test-ชลธิชา Test-จันทร์เพ็ญ',
                    'agentgender': 'F',
                    'customername': 'ทดสอบ3 เบอร์จัดส่งเอกสาร',
                    'carbrand': '',
                    'carmodel': 'ATTRAGE GLS AT 1.2 CC 4 DOORS',
                    'systemtype': '',
                    'typedealer': '',
                    'ownerlicence': '6604001768',
                    'ownerlicencename': 'Test-ชลธิชา Test-จันทร์เพ็ญ',
                    'listtype': 'renew',
                    'userlogin': 'ski105',
                    'media': 'Manual Add-Sup',
                    'userlogin': 'ski105',
                    'timestamp': String(new Date().getTime())
                }
                setIntroStatus('idle')
                fnAPIGetProxy(dynamicurl.apis.apiproxy + '/proxy/v1.0', data, token, keys.carinsurance.fnGetIntroMessage, "", function (err, res) {
                    if (err) {
                        console.log(err)
                        setIntroStatus('error')
                    } else {
                        setIntroStatus('ready')
                        console.log("fnGetIntroMessage")
                        console.log(res.result.data)
                        setIntroMessage(res.result.data[0]?.message)
                    }
              })
          }
        } 
        
        init();
    }, [])

    return {
        introMessage,
        mainStatus: profileStatus && introStatus
    }
}
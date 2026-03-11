import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import KYCService from '@/services/KYCService.service.js'

export function useKYCPanel() {

    const { dynamicurl, token } = useSelector(s => s.dynamicurl)
    const apiproxy = dynamicurl.apis.apiproxy
    const { username, listid, listtable, ulogin, color } = useSelector(s => s.params.parameters)

    const [kycStatus, setKYCStatus] = useState("idle")
    const [allCarYear, setAllCarYear] = useState([])
    const [allCarBrand, setAllCarBrand] = useState([])
    const [allCarProvince, setAllCarProvince] = useState([])
    const [allModifyTypeStatus, setModifyTypeStatus] = useState([])
    const [insurBefore, setInsurBefore] = useState([])
    const [CMICompany, setCMICompany] = useState([])
    const [problemChoice, setProblemChoice] = useState([])
    const [customerProfile, setCustomerProfile] = useState(null)
    
    useEffect(() => { /* fetch only when first load..  */
        // if (kycData.length > 0) return
        
        async function init() {
            setKYCStatus("loading")
            /* fnGetInsurBefore */
            if (dynamicurl && token) {
                try {
                    
                    let res = await KYCService.fnGetAllCarYear({ apiproxy, token })
                    res.unshift({ carYearEN: 'ปี'})
                    setAllCarYear(res)

                    let res2 = await KYCService.fnGetAllCarBrand({ apiproxy, token })
                    res2.unshift({ carBrand: 'ยี่ห้อ' })
                    setAllCarBrand(res2)

                    let res3 = await KYCService.fnGetAllCarProvince({ apiproxy, token })
                    setAllCarProvince(res3)
                    
                    let res4 = await KYCService.fnGetModifyType({ apiproxy, token })
                    setModifyTypeStatus(res4)
                    
                    const result = await KYCService.fnGetInsurBefore({ apiproxy, token })
                    setInsurBefore(result)
                    
                    let res6 = await KYCService.fnGetCMICompany({ apiproxy, token })
                    setCMICompany(res6)

                    /* fnSetProblemChoice */
                    let res7 = await KYCService.fnGetProblemChoice({ apiproxy, token })
                    setProblemChoice(res7)    

                    /* getCustomerProfile */
                    let res8 = await KYCService.fnGetCustomerProfile({ apiproxy, token, listtable, listid, ulogin })
                    setCustomerProfile(res8?.[0]) 
                    
                    setKYCStatus("ready")
                } catch (error) {
                    console.log(error)
                }
            }
        }
        init()
    }, [dynamicurl, token])

    return {
        allCarYear,
        allCarBrand,
        allCarProvince,
        allModifyTypeStatus,
        insurBefore,
        CMICompany,
        customerProfile,
        kycStatus
    }
}
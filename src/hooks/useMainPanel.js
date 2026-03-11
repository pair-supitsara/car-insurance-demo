import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import MainService from '@/services/MainService.service.js'

export function useMainPanel() {

    const { dynamicurl, token } = useSelector(s => s.dynamicurl)
    const apiproxy = dynamicurl.apis.apiproxy
    const { username, listid, listtable, ulogin, color } = useSelector(s => s.params.parameters)

    // const [insurBefore, setInsurBefore] = useState([])
    // const [CMICompany, setCMICompany] = useState([])
    const [agentProfile, setAgentProfile] = useState([])
    const [referId, setReferid] = useState([])
    const [custProfile, setCustProfile] = useState([])
    const [introMessage, setIntroMessage] = useState([])
    const [contactHistory, setContactHistory] = useState([])
    // const [problemChoice, setProblemChoice] = useState([])
    // const [customerProfile, setCustomerProfile] = useState([])
    const [IMProfile, setIMProfile] = useState([])
    const [maxDiscountLongtime, setMaxDiscountLongtime] = useState([])
    const [FAQ, setFAQ] = useState([])
    const [blockCarPartner, setBlockCarPartner] = useState([])

    useEffect(() => {
        
        async function init() {
            /* call api dynamic url */
            console.log('init')
            
            if (dynamicurl && token) {
                try {
                    /*let res5 = await MainService.fnGetInsurBefore({ apiproxy, token })
                    setInsurBefore(res5)*/

                    /*let res6 = await MainService.fnGetCMICompany({ apiproxy, token })
                    setCMICompany(res6)*/

                    /* get agent profile */
                    let resAgentProfile = await MainService.fnGetUserProfile({ apiproxy, token, username, ulogin })
                    console.log('resAgentProfile')
                    console.log(resAgentProfile)
                    setAgentProfile(resAgentProfile)

                    if ( !["blue", "violet"].includes(color.toLowerCase()) ) {
                        /* get user profile */
                        let res = await MainService.fnGetReferid({ apiproxy, token, listid, listtable })
                        setReferid(res)
                    }

                    /* fnGetIntroCustprofile */
                    let resCustProfile = await MainService.fnGetIntroCustprofile({ apiproxy, token, listid, listtable, ulogin })
                    console.log('resCustProfile')
                    console.log(resCustProfile?.[0])
                    setCustProfile(resCustProfile?.[0])
                            
                    if (resCustProfile.length>0 && resAgentProfile.length>0) {
                        /*intro message */
                        const data = { 
                            apiproxy, token
                            , listtable, listid, listcolor: color
                            , listtype: resCustProfile[0].listType
                            , customername: resCustProfile[0].customerName
                            , agentname: resAgentProfile[0].firstName+' '+resAgentProfile[0].lastName
                            , agentgender: resAgentProfile[0].gender
                            , carband: resCustProfile[0].carBrand
                            , carmodel: resCustProfile[0].carModel
                            , systemtype: resCustProfile[0].systemType
                            , typedealer: resCustProfile[0].typeDealer
                            , ownerlicence: resAgentProfile[0].ownerLicence
                            , ownerlicencename: resAgentProfile[0].ownerLicenceName
                            , media: resCustProfile[0].media
                            , ulogin
                        }
                        console.log(data)
                        let res = await MainService.fnGetIntroMessage(data)
                        setIntroMessage(res)
                    }

                    if (color.toLowerCase() != "blue") {
                        /* getcontacthistory */
                        let res = await MainService.fnGetContactHistory({ apiproxy, token, listtable, listid })
                        console.log("fnGetContactHistory")
                        setContactHistory(res)
                    }

                    /* getCustomerProfile */
                    /*let res8 = await MainService.fnGetCustomerProfile({ apiproxy, token, listtable, listid, ulogin })
                    setCustomerProfile(res8)*/
                    
                    if (resCustProfile.length > 0) {
                        console.log("getIMProfile")
                        /* getIMProfile */
                        let res = await MainService.fnGetIMProfile({ apiproxy, token, listtable, listid, typedealer: resCustProfile?.[0].typeDealer })
                        setIMProfile(res)
                    }

                    /* getmaxdiscountlongtime */
                    let res9 = await MainService.fnGetMaxDiscountLongtime({ apiproxy, token })
                    setMaxDiscountLongtime(res9)

                    /* getFAQ */
                    let res10 = await MainService.fnGetFAQ({ apiproxy, token })
                    setFAQ(res10)

                    /* fnSetTimeStart /silkspan_ssl/car_insurance_v2/process.asp */

                    /* fnSetDetailBlockCarPartner */
                    /*let res11 = await MainService.fnChkBlockPartner({ apiproxy, token, phone: null, regno: null, carprovince: null, isChkRegno: null })
                    setBlockCarPartner(res11)*/
                } catch(error) {
                    console.log(error)
                }
            }
        } 
        
        init();
    }, [dynamicurl, token])

    return {
        // insurBefore,
        // CMICompany,
        agentProfile,
        referId,
        custProfile,
        introMessage,
        contactHistory,
        // problemChoice,
        // customerProfile,
        IMProfile,
        maxDiscountLongtime,
        FAQ,
        blockCarPartner,
        mainStatus: true
    }
}
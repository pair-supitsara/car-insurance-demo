import keys from '@/utils/keys.js'
import { fnAPIGetProxy, fnAPIPostProxy, fnSplitKongGetMethod } from '@/utils/@lib/api.js'

const MainService = {
    /*async fnGetInsurBefore ({ apiproxy, token }) {
        try {
            const data = {
                'command': 'getinsurbefore',
                timestamp: String(new Date().getTime())
            }
            const res = await fnAPIPostProxy(apiproxy, data, token, keys.carinsurance.fnGetInsurBefore, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetCMICompany ({ apiproxy, token }) {
        try {
            const data = {
                'command': 'getcmicompany',
                timestamp: String(new Date().getTime())
            }
            const res = await fnAPIPostProxy(apiproxy, data, token, keys.carinsurance.fnGetCMICompany, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },*/
    async fnGetUserProfile ({ apiproxy, token, username, ulogin }) {
        try {
            const data = {
                'command': 'getuserprofile',
                'username': username,
                'userlogin': ulogin,
                timestamp: String(new Date().getTime())
            }
            let res = await fnAPIPostProxy(apiproxy, data, token, keys.carinsurance.fnGetUserProfile, "")
            /*console.log("fnGetUserProfile")
            console.log(res.result.data)*/
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetReferid ({ apiproxy, token, listid, listtable }) {
        try {
            const data = {
                'command': 'getreferid',
                'listID': listid,
                'listtable': listtable,
                timestamp: String(new Date().getTime())
            }
            let res = await fnSplitKongGetMethod(apiproxy, data, token, keys.carinsurance.fnGetReferid, "")
            /*console.log("fnGetUserProfile")
            console.log(res.result.data)*/
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetIntroMessage ({ apiproxy, token
        , listtable, listid, listcolor, listtype, customername
        , agentname, agentgender
        , carband, carmodel, systemtype, typedealer
        , ownerlicence, ownerlicencename, media, ulogin
    }) {
        try {
            const data = {
                'command': 'getintromessage',
                'listTable': listtable,
                'listID': listid,
                'listcolor': listcolor,
                'agentname': agentname,
                'agentgender': agentgender,
                'customername': customername,
                'carbrand': carband,
                'carmodel': carmodel,
                'systemtype': systemtype,
                'typedealer': typedealer,
                'ownerlicence': ownerlicence,
                'ownerlicencename': ownerlicencename,
                'listtype': listtype,
                'userlogin': ulogin,
                'media': media,
                'timestamp': String(new Date().getTime())
            }
            let res = await fnAPIGetProxy(apiproxy, data, token, keys.carinsurance.fnGetIntroMessage, "")
            console.log(res)
            
            return res.result.data
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    },
    async fnGetContactHistory ({ apiproxy, token, listtable, listid }) {
        try {
            const data = {
                'command': 'getcontacthistory',
                "listtable": listtable,
                "listid": listid,
                timestamp: String(new Date().getTime())
            }
            let res = await fnAPIPostProxy(apiproxy, data, token, keys.carinsurance.fnGetContactHistory, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    /*async fnGetCustomerProfile ({ apiproxy, token, listtable, listid, ulogin }) {
        try {
            const data = {
                'command': 'getcustomerprofile',
                'listTable': listtable,
                'listID': listid,
                'userlogin': ulogin,
                timestamp: String(new Date().getTime())
            }
            let res = await fnAPIGetProxy(apiproxy, data, token, keys.carinsurance.fnGetCustomerProfile, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },*/
    async fnGetIntroCustprofile ({ apiproxy, token, listid, listtable, ulogin }) {
        try {
            const data = {
                'command': 'getIntroCustprofile',
                'listTable': listtable,
                'listID': listid,
                'userlogin': ulogin,
                timestamp: String(new Date().getTime())
            }
            let res = await fnAPIGetProxy(apiproxy, data, token, keys.carinsurance.fnGetIntroCustprofile, "")
            /*console.log("fnGetUserProfile")
            console.log(res.result.data)*/
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnSetDisableCallStatus ({ apiproxy, token }) {
        try {
            const data = {
                'command': 'fnChkPickListRenewNoWarning',
                listid: $('#listID').val(),
                typechk: 'chkexppicklist',
                timestamp: String(new Date().getTime())
            }
            let res = await fnAPIGetProxy(apiproxy, data, token, keys.carinsurance.fnChkPickListRenewNoWarning, "")
            /*console.log("fnGetUserProfile")
            console.log(res.result.data)*/
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetFAQ ({ apiproxy, token }) {
        try {
            const data = {
                'command': 'getFAQ',
                timestamp: String(new Date().getTime())
            }
            let res = await fnSplitKongGetMethod(apiproxy, data, token, keys.carinsurance.fnGetFAQ, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetIMProfile ({ apiproxy, token, listtable, listid, typedealer }) {
        try {
            const data = {
                'command': 'getIMProfile',
                'listtable': listtable,
                'listid': listid,
                'mimcid': ((typedealer?.toLowerCase().indexOf('toa') > -1 ) ? 2 : 2),
                'mimscid': ((typedealer?.toLowerCase().indexOf('toa') > -1 ) ? 4 : 2),
                'timestamp': String(new Date().getTime())
            }
            let res = await fnSplitKongGetMethod(apiproxy, data, token, keys.silkspanlineoa.fnGetIMProfile, "")
            return res.result.data
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    },
    async fnGetMaxDiscountLongtime ({ apiproxy, token }) {
        try {
            const data = {
                'command': 'getmaxdiscountlongtime',
                timestamp: String(new Date().getTime())
            }
            let res = await fnSplitKongGetMethod(apiproxy, data, token, keys.carinsurance.fnGetMaxDiscountLongtime, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnChkBlockPartner({ apiproxy, token, phone, regno, carprovince, isChkRegno }) {
        try {
            const data = {
                'command': 'fnChkDataBlockCarPartner', 
                'noregister' :  regno, 
                'carprovince' :  carprovince, 
                'timestamp' : String(new Date().getTime())
            }
            if (!isChkRegno) {
                data.phone = phone
            } else {
                data.noregister = regno
                data.carprovince = carprovince
            }
            let res = await fnAPIGetProxy(apiproxy, data, token, keys.utility.fnChkBlockPartner, "")
            /*console.log("fnGetUserProfile")
            console.log(res.result.data)*/
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default MainService;
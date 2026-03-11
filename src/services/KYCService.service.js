import keys from '@/utils/keys.js'
import { fnAPIGetProxy, fnAPIPostProxy, fnSplitKongGetMethod  } from '@/utils/@lib/api.js'

const KYCService = {
    async fnGetInsurBefore ({ apiproxy, token }) {
        try {
            var data = {
                "command": "getinsurbefore",
                "timestamp": String(new Date().getTime())
            }
            let res = await fnAPIPostProxy(apiproxy, data, token, keys.carinsurance.fnGetInsurBefore, "")
            /*console.log("fnGetInsurBefore")
            console.log(res.result.data)*/
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetAllCarYear ({ apiproxy, token }) {
        try {
            var data = {
                'command': 'getallcaryear',
                timestamp: String(new Date().getTime())
            }
            let res = await fnAPIPostProxy(apiproxy, data, token, keys.carinsurance.fnGetAllCarYear, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetAllCarBrand ({ apiproxy, token }) {
        try {
            var data = {
                'command': 'getallcarbrand',
                timestamp: String(new Date().getTime())
            }
            let res = await fnAPIPostProxy(apiproxy, data, token, keys.carinsurance.fnGetAllCarBrand, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetGroupCarModel ({ apiproxy, token, carYear, carBrand, carModel }) {
        try {
            var data = {
                'command': 'getgroupcarmodel',
                'carYear': carYear,
                'carBrand': carBrand,
                'carModel': carModel,
                timestamp: String(new Date().getTime())
            }
            let res = await fnSplitKongGetMethod(apiproxy, data, token, keys.carinsurance.fnGetGroupCarModel, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetCarModel ({ apiproxy, token, caryear, carbrand, cargroupmodel }) {
        try {
            var data = {
                'command': 'getcarmodel',
                'caryear': caryear,
                'carbrand': carbrand,
                'cargroupmodel': cargroupmodel,
                timestamp: String(new Date().getTime())
            }
            let res = await fnSplitKongGetMethod(apiproxy, data, token, keys.carinsurance.fnGetCarModel, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetAllCarProvince ({ apiproxy, token }) {
        try {
            var data = {
                'command': 'getcarprovince',
                timestamp: String(new Date().getTime())
            }
            let res = await fnAPIPostProxy(apiproxy, data, token, keys.carinsurance.fnGetAllCarProvince, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetModifyType ({ apiproxy, token }) {
        try {
            const data = {
                'command': 'getmodifytype',
                timestamp: String(new Date().getTime())
            }
            const res = await fnAPIPostProxy(apiproxy, data, token, keys.carinsurance.fnGetModifyType, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetInsurBefore ({ apiproxy, token }) {
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
    },
    async fnGetProblemChoice ({ apiproxy, token }) {
        try {
            const data = {
                'command': 'fnGetProblemChoice',
                timestamp: String(new Date().getTime())
            }
            let res = await fnAPIGetProxy(apiproxy, data, token, keys.carinsurance.fnGetProblemChoice, "")
            return res.result.data
        } catch (error) {
            throw new Error(error)
        }
    },
    async fnGetCustomerProfile ({ apiproxy, token, listtable, listid, ulogin }) {
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
    },
}

export default KYCService
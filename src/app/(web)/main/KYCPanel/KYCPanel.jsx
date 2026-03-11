'use client'
import { useSelector, useDispatch } from 'react-redux'
import { useKYCPanel } from "@/hooks/useKYCPanel.js"
import { useEffect, useRef, useState } from 'react'

import Input from '@/components/Input/v1.0/Input'
import Range from '@/components/Range/v1.0/Range'
import RadioInput from '@/components/RadioInput/v1.0/RadioInput'
import Selector from '@/components/Selector/v1.0/Selector'
import Card from '@/components/Card/v1.0/Card'
import Button from '@/components/Button/v1.0/Button'
import KYCService from '@/services/KYCService.service.js'

import { fnDisplayDateinTH } from '@/utils/dateformatter.utils'
import { fnRestrictText } from '@/utils/helper.js'

export default function KYCPanel() {
    const { dynamicurl, token } = useSelector(s => s.dynamicurl)
    const apiproxy = dynamicurl.apis.apiproxy
    const dispatch = useDispatch()
    const fnShowPanels = (name) => dispatch({ type: 'ui/fnShowPanels', payload: { name: name } })

    const [slCarYear, setSlCarYear] = useState(null)
    const [slCarBrand, setSlCarBrand] = useState(null)
    const [slGroupCarModel, setSlGroupCarModel] = useState(null)
    const [slCarModel, setSlCarModel] = useState(null)

    const { 
        allCarYear,
        allCarBrand,
        allCarProvince,
        allModifyTypeStatus,
        insurBefore,
        CMICompany,
        customerProfile,
        kycStatus
    } = useKYCPanel()

    const [allGroupCarModel, setAllGroupCarModel] = useState([{ carGroupModel: 'รุ่น' }])
    const [allCarModel, setCarModel] = useState([{ carViewModel: 'รายละเอียดรุ่นรถ' }])
    console.log(slCarModel)

    useEffect(() => {
        async function fnLoadGroupModel() {
            
            if (slCarYear && slCarBrand) {
                let res = await KYCService.fnGetGroupCarModel({ apiproxy, token, carYear: slCarYear, carBrand: slCarBrand, carModel: "" })
                setAllGroupCarModel(res)
                console.log(res)
            }

            if (slCarYear && slCarBrand && slGroupCarModel) {
                let res = await KYCService.fnGetCarModel({ apiproxy, token, caryear: slCarYear, carbrand: slCarBrand, cargroupmodel: slGroupCarModel })
                setCarModel(res)
                console.log(res)
            }
        }
        fnLoadGroupModel()
    }, [slCarYear, slCarBrand, slGroupCarModel])

    const customerTypeCar = allCarModel.filter((item) => item.carViewModel == slCarModel)?.[0];

    if (kycStatus === 'error') {
        return (<>
            <div className='row mb-3' style={{ paddingRight: '5rem', paddingLeft: '1rem' }}>
                <div className="col-12">
                    <Card name='คำถาม KYC "ขอสอบถามข้อมูลเบื้องต้น เพื่อให้ลูกค้าได้ข้อมูลเบี้ยประกันที่คุ้มค่า และตรงกับความต้องการและการใช้งานมากที่สุด"'>
                        Error occur
                    </Card>
                </div>
            </div>
        </>)
    }

    return (
    <>
        <div className='row mb-3 ' style={{ paddingRight: '5rem', paddingLeft: '1rem' }}>
            <div className="col-12">
                <Card name='คำถาม KYC "ขอสอบถามข้อมูลเบื้องต้น เพื่อให้ลูกค้าได้ข้อมูลเบี้ยประกันที่คุ้มค่า และตรงกับความต้องการและการใช้งานมากที่สุด"'>
                    <div className='row'>
                        <div className='col-6'>
                            <Input name="วันที่ประกันหมดอายุ " id="expireDate" type="text" isdisabled={true} col={6} 
                                value={fnDisplayDateinTH(customerProfile?.expDate)} />
                        </div>
                        <div className='col-6'>
                            <Input name="วันที่เริ่มคุ้มครอง " id="coverDate" type="text" isdisabled={true} col={6}
                                value={fnDisplayDateinTH(customerProfile?.coverDate)}
                            tooltip="การขายลูกค้าที่หมดไกล จะได้รับส่วนลดหมดไกลโดยอัตโนมัติ และการขายลูกค้าที่หมดไกลนั้น จะไม่มีคู่แข่ง ทำให้ขายง่ายกว่าการขายแบบหมดใกล้"
                            />
                        </div>
                        <div className='col-6'>
                            {/*<Input name="ปีรุ่น" id="yearCar" type="text" isdisabled={true} col={6} 
                            tooltip="รถปีใหม่ที่น้อยกว่า 5 ปี แนะนำให้เสนอประกันแบบซ่อมห้าง<br> ส่วนรถที่มีอายุมากกว่า 5 ปีเสนอซ่อมอู่ แต่กรณีที่ลูกค้า<br>ต้องการซ่อมห้าง จะมีบริษัทประกันที่ซ่อมห้างได้ถึง 15 ปี (MTL)"
                            />*/}
                            <Selector 
                                name="ปีรุ่น"
                                id="yearCar"
                                options={ allCarYear }
                                set_key_option="carYearEN"
                                set_value_option="carYearEN"
                                defaultValue=""
                                isdisabled={false}
                                col={6}
                                action={(e) => setSlCarYear(e.target.value)}
                            />
                        </div>
                        <div className='col-6'>
                            <Input name="ข้อมูลเดิม" id="oldModel" type="text" isdisabled={true} col={6}
                                value={customerProfile?.carBrand + ' ' + customerProfile?.carViewModel}
                            />
                        </div>
                        <div className='col-6'>
                            {/*<Input name="ยี่ห้อรถ" id="carBrand" type="text" isdisabled={true} col={6} />*/}
                            <Selector 
                                name="ยี่ห้อรถ"
                                id="brandCar"
                                options={ allCarBrand }
                                set_key_option="carBrand"
                                set_value_option="carBrand"
                                defaultValue=""
                                isdisabled={false}
                                col={6}
                                action={(e) => setSlCarBrand(e.target.value)}
                            />
                        </div>
                        <div className='col-6'>
                            {/*<Input name="รุ่นรถ" id="carGroupModel" type="text" isdisabled={true} col={6} />*/}
                            <Selector 
                                name="รุ่นรถ"
                                id="carGroupModel"
                                options={ allGroupCarModel }
                                set_key_option="carGroupModel"
                                set_value_option="carGroupModel"
                                defaultValue=""
                                isdisabled={false}
                                col={6}
                                action={(e) => setSlGroupCarModel(e.target.value)}
                            />
                        </div>
                        <div className='col-6'>
                            {/*<Input name="รายละเอียดรุ่นรถ" id="carModel" type="text" isdisabled={true} col={6} />*/}
                            <Selector 
                                name="รายละเอียดรุ่นรถ"
                                id="modelCar"
                                options={ allCarModel }
                                set_key_option="carViewModel"
                                set_value_option="carViewModel"
                                defaultValue=""
                                isdisabled={false}
                                col={6}
                                action={(e) => setSlCarModel(e.target.value)}
                            />
                        </div>
                        <div className='col-6'>
                            <Range name="เลขไมล์รถ (กิโลเมตร)" id="rangeMileage" col={6}
                            tooltip="มาตรฐานในการขับรถโดยเฉลี่ยปีละ 20,000-25,000 กม <br>ถ้าลูกค้าใช้รถเยอะ จะมีความเสี่ยงในการเกิดอุบัติเหตุ<br> แนะนำให้ไม่มีค่าเสียหายส่วนแรก กรณีที่ลูกค้าใช้รถน้อย<br>หรือไม่ได้ใช้เลย จะมีความเสี่ยงน้อย แนะนำให้มีค่าเสียหายส่วนแรก <br>เพื่อลดเบี้ยประกันให้ถูกลง"
                            />
                        </div>
                        <div className='col-6'>
                            <Input name="ประเภทรถ" id="customerTypeCar" type="text" isdisabled={true} col={6}
                                value={(customerTypeCar ? (customerTypeCar.carBody + ' ' + customerTypeCar.carDoor) : '')} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            {/*<Input name="ติดตั้งกล้องหน้ารถยนต์ไหมคะ" id="policyType" type="text" isdisabled={true} col={6} />*/}
                            <div className='row'>
                                <label htmlFor="cctv" className="form-label">
                                    ติดตั้งกล้องหน้ารถยนต์ไหมคะ
                                </label>
                                <RadioInput name="ติด" groupRadio="cctv" id={"rd_cctv_n"} value="n" col={3} onChange={()=>{}} />
                                <RadioInput name="ไม่ติด" groupRadio="cctv" id={"rd_cctv_y"} value="y" col={3} onChange={()=>{}} />
                            </div>
                        </div>
                        <div className='col-6'>
                            {/*<Input name="หมายเลขทะเบียนรถ" id="policyType" type="text" isdisabled={true} col={6} /> */}
                            <div className='row'>
                                <label htmlFor="giveregister" className="form-label">
                                    หมายเลขทะเบียนรถ
                                </label>
                                <RadioInput name="ให้" groupRadio="giveregister" id={"rd_give_register"} value="n" col={3} onChange={()=>{}} />
                                <RadioInput name="ไม่ให้" groupRadio="giveregister" id={"rd_notgive_register"} value="y" col={3} onChange={()=>{}} />
                            </div>
                        </div>
                        <div className='col-6'>
                            {/*<Input name="ประเภทจดทะเบียน" id="policyType" type="text" isdisabled={true} col={6} />*/}
                            <div className='row'>
                                <label htmlFor="registerType" className="form-label">
                                    ประเภทจดทะเบียน
                                </label>
                                <RadioInput name="บุคคลธรรมดา" groupRadio="registerType" id={"rd_give_register"} value="personal" col={3} onChange={()=>{}} />
                                <RadioInput name="นิติบุคคล" groupRadio="registerType" id={"rd_notgive_register"} value="company" col={3} onChange={()=>{}} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <Selector 
                                name="จังหวัดจดทะเบียน"
                                id="carProvince"
                                options={ allCarProvince }
                                set_key_option="madpv_id"
                                set_value_option="madpv_name_thai"
                                defaultValue=""
                                col={6}
                            />
                        </div>
                        <div className='col-6'>
                            <Selector 
                                name="พื้นที่ใช้รถ"
                                id="areaUsed"
                                options={ allCarProvince }
                                set_key_option="madpv_id"
                                set_value_option="madpv_name_thai"
                                defaultValue=""
                                col={6}
                            />
                        </div>
                        <div className='col-6'>
                            <Input name="จำนวนวันที่ใช้รถต่อสัปดาห์" id="policyType" type="number" col={6} action={fnRestrictText}/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <Input name="ปีนี้สนใจประกันประเภทไหนคะ" id="policyType" type="text" isdisabled={true} col={6} />
                        </div>
                        <div className='col-6'>
                            <Input name="ประเภทการซ่อม" id="coverDate" type="insurGarageDealer" isdisabled={true} col={6} />
                        </div>
                        <div className='col-6'>
                            <Selector 
                                name="บริษัทประกันภัยเดิมคือบริษัทไหนคะ"
                                id="insurBefore"
                                //options={ allCarYear }
                                set_key_option="comp_id"
                                set_value_option="comp_name_thai"
                                defaultValue=""
                                isdisabled={false}
                                col={6}
                            />
                        </div>
                        <div className='col-6'>
                            <Input name="ปัญหาที่พบของบริษัทประกันเดิมคะ" id="claimProblem" type="text" isdisabled={true} col={6} />
                        </div>
                        <div className='col-6'>
                            <Input name="ปกติลูกค้าใช้รถกี่คนคะ" id="claimProblem" type="text" isdisabled={true} col={6} />
                        </div>
                        <div className='col-6'>
                            <Input name="ผู้เอาประกันอายุเท่าไรคะ" id="claimProblem" type="text" isdisabled={true} col={6} />
                        </div>
                        <div className='col-6'>
                            <Input name="ผู้จดทะเบียนเป็นเพศไหนคะ" id="claimProblem" type="text" isdisabled={true} col={6} />
                        </div>
                    </div>

                    
                </Card>
            </div>
            <div className="col-12">
                <Button name='คำนวณเบี้ยประกัน' icon='bi bi-calculator-fill' handleButton={()=>{ fnShowPanels('comparePackagePanel') }} />
            </div>
        </div>
    </>)
}
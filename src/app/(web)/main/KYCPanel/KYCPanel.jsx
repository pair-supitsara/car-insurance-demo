'use client'
import { useSelector, useDispatch } from 'react-redux'

import Input from '../../../components/Input/v1.0/Input'
import Card from '../../../components/Card/v1.0/Card'
import Button from '../../../components/Button/v1.0/Button'

export default function KYCPanel() {
    const dispatch = useDispatch()
    const fnShowPanels = (name) => dispatch({ type: 'ui/fnShowPanels', payload: { name: name } })
    
    return (
    <>
        <div className='row mb-3' style={{ paddingRight: '5rem', paddingLeft: '1rem' }}>
            <div className="col-12">
                <Card name='คำถาม KYC "ขอสอบถามข้อมูลเบื้องต้น เพื่อให้ลูกค้าได้ข้อมูลเบี้ยประกันที่คุ้มค่า และตรงกับความต้องการและการใช้งานมากที่สุด"'>
                    <div className='row'>
                        <div className='col-6'>
                            <Input name="วันที่ประกันหมดอายุ " id="expireDate" type="text" isdisabled={true} col={6} />
                        </div>
                        <div className='col-6'>
                            <Input name="วันที่เริ่มคุ้มครอง " id="coverDate" type="text" isdisabled={true} col={6} 
                            tooltip="การขายลูกค้าที่หมดไกล จะได้รับส่วนลดหมดไกลโดยอัตโนมัติ และการขายลูกค้าที่หมดไกลนั้น จะไม่มีคู่แข่ง ทำให้ขายง่ายกว่าการขายแบบหมดใกล้"
                            />
                        </div>
                        <div className='col-6'>
                            <Input name="ปีรุ่น" id="yearCar" type="text" isdisabled={true} col={6} 
                            tooltip="รถปีใหม่ที่น้อยกว่า 5 ปี แนะนำให้เสนอประกันแบบซ่อมห้าง<br> ส่วนรถที่มีอายุมากกว่า 5 ปีเสนอซ่อมอู่ แต่กรณีที่ลูกค้า<br>ต้องการซ่อมห้าง จะมีบริษัทประกันที่ซ่อมห้างได้ถึง 15 ปี (MTL)"
                            />
                        </div>
                        <div className='col-6'>
                            <Input name="ข้อมูลเดิม" id="oldModel" type="text" isdisabled={true} col={6}
                            />
                        </div>
                        <div className='col-6'>
                            <Input name="ยี่ห้อรถ" id="carBrand" type="text" isdisabled={true} col={6}
                            />
                        </div>
                        <div className='col-6'>
                            <Input name="รุ่นรถ" id="carGroupModel" type="text" isdisabled={true} col={6}
                            />
                        </div>
                        <div className='col-6'>
                            <Input name="รายละเอียดรุ่นรถ" id="carModel" type="text" isdisabled={true} col={6}
                            />
                        </div>
                        <div className='col-6'>
                            <Input name="เลขไมล์รถ (กิโลเมตร)" id="rangeMileage" type="text" isdisabled={true} col={6}
                            tooltip="มาตรฐานในการขับรถโดยเฉลี่ยปีละ 20,000-25,000 กม <br>ถ้าลูกค้าใช้รถเยอะ จะมีความเสี่ยงในการเกิดอุบัติเหตุ<br> แนะนำให้ไม่มีค่าเสียหายส่วนแรก กรณีที่ลูกค้าใช้รถน้อย<br>หรือไม่ได้ใช้เลย จะมีความเสี่ยงน้อย แนะนำให้มีค่าเสียหายส่วนแรก <br>เพื่อลดเบี้ยประกันให้ถูกลง"
                            />
                        </div>
                        <div className='col-6'>
                            <Input name="ประเภทรถ" id="customerTypeCar" type="text" isdisabled={true} col={6}
                            />
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
'use client'

import { useSelector, useDispatch } from 'react-redux'
import { fnDisplayDateinTH } from '@/utils/dateformatter.utils.js'

import Input from '@/components/Input/v1.0/Input.jsx'
import Card from '@/components/Card/v1.0/Card.jsx'
import NavigationCard from '@/components/NavigationCard/v1.0/NavigationCard.jsx'
import RadioInput from '@/components/RadioInput/v1.0/RadioInput.jsx'

import { useMainPanel } from '@/hooks/useMainPanel.js'

const panelComponents = [
    { name: "ประวัติการติดต่อ", panelname: "history", component: <h5>ประวัติการติดต่อ</h5>},
    { name: "รายการโอนโค๊ด", panelname: "tranfertranscode", component: <h5>รายการโอนโค๊ด</h5>}
];

export default function MainPanel() {

  const dispatch = useDispatch()
  const fnShowPanels = (name) => dispatch({ type: 'ui/fnShowPanels', payload: { name: name} })
  const fnHidePanels = (name) => dispatch({ type: 'ui/fnHidePanels', payload: { name: name} })
  const customer = useSelector(s => s.customer)
  const { panels } = useSelector(s => s.ui.panelstack)
  const token = useSelector(s => s.dynamicurl.token)

  const { introMessage, mainStatus } = useMainPanel()
  if (!mainStatus) {
    return <div>error</div>
  }

  const fnHandleChange = (e) => {
    const value = e.target.value
    if (value === 'ok') {
      dispatch(fnShowPanels('kycPanel'))
    } else {
      dispatch(fnHidePanels('kycPanel'))
    }
  }

  return (<>
    {panels.includes('mainPanel') && <>
        <div className='row mb-3' style={{ paddingRight: '5rem', paddingLeft: '1rem' }}>
            <div className="col-6 p-2">
              <Card name="ข้อมูลลูกค้า" color={'blue'}>
                  <div className='row'>
                    <Input name="ชื่อ" id="customername" 
                          value={`${customer.custprofile.customerName} `} 
                          isdisabled={true} col={6} />

                    <Input name="ระดับลูกค้า" id="rankcustomer" 
                          isdisabled={true} col={6} />
                    
                    <Input name="รถยนต์" id="carband" 
                          value={`ยี่ห้อ ${customer.custprofile.carBrand} รุ่น ${customer.custprofile.carModel || '-'} ปี ${customer.custprofile.carYear}`} 
                          isdisabled={true} col={6} />

                    <Input name="" id="customername"
                          isdisabled={true} col={6} />

                    <Input name="ประกันหมดอายุ" id="insureExpireDate" 
                          value={fnDisplayDateinTH(customer.custprofile.expDate) || '-'} 
                          isdisabled={true} col={6} />
                  </div>
              </Card>
            </div>
            
            <div className="col-6 p-2">
              <NavigationCard panelComponents={panelComponents} color='blue' />
            </div>
        </div>

        <div className='row mb-3' style={{ paddingRight: '5rem', paddingLeft: '1rem' }}>
            <div className="col-6 p-2">
                <Card name="แนะนำตัว">
                <p>
                  { introMessage.replace(/<[^>]+>/g, "") }
                </p>
                </Card>
            </div>
            
            <div className="col-6 p-2">
              <Card name="สถานะการโทร">
                <div className='d-flex'>
                  <RadioInput groupRadio="callStatus" name="สะดวกคุย" value="ok" col={4} onChange={fnHandleChange} />
                  <RadioInput groupRadio="callStatus" name="ไม่สะดวกคุย" value="busy" col={4} onChange={fnHandleChange} />
                  <RadioInput groupRadio="callStatus" name="ไม่รับสาย / ฝากข้อความ" value="misscall" col={4} onChange={fnHandleChange} />
                </div>
                <div className='d-flex'>
                  <RadioInput groupRadio="callStatus" name="ซื้อไปแล้ว" col={4} value="buyed" onChange={fnHandleChange} />
                  <RadioInput groupRadio="callStatus" name="อีกตั้งนานกว่าจะหมด" value="longtime" col={4} onChange={fnHandleChange} />
                </div>
                <div className='d-flex'>
                  <RadioInput groupRadio="callStatus" name="ไม่มีรถ" col={4} value="nocar" onChange={fnHandleChange} />
                  <RadioInput groupRadio="callStatus" name="ไม่ได้ใช้รถ" col={4} value="notuse" onChange={fnHandleChange} />
                  <RadioInput groupRadio="callStatus" name="ขายรถแล้ว" col={4} value="sellcar" onChange={fnHandleChange} />
                </div>
                <div className='d-flex'>
                  <RadioInput groupRadio="callStatus" name="ตามกรมธรรม์, งานหลังขาย" col={4} value="aftersale"  onChange={fnHandleChange} />
                  <RadioInput groupRadio="callStatus" name="ไม่ต้องการรับการติดต่อ" col={4} value="nocall"  onChange={fnHandleChange} />
                  <RadioInput groupRadio="callStatus" name="ไม่พอใจบริการ" col={4} value="notsatisfied" onChange={fnHandleChange} />
                </div>
                <div className='d-flex'>
                  <RadioInput groupRadio="callStatus" name="เบอร์เสีย" col={4} value="delete" onChange={fnHandleChange} />
                  <RadioInput groupRadio="callStatus" name="ชื่อซ้ำ" col={4} value="dup" onChange={fnHandleChange} />
                </div>
              </Card>
            </div>
        </div>
    </>}
  </>)
}
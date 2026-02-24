'use client'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import fnPostAPI from '@/services/fetch.js'
import { fnDisplayDateinTH } from '@/utils/helper.js'
import { fnAPIPostProxy, fnApiNodeRedPostDynamicUrl } from '@/utils/@lib/helper.js'

import Input from '@/app/components/Input/v1.0/Input.jsx'
import Card from '@/app/components/Card/v1.0/Card.jsx'
import NavigationCard from '@/app/components/NavigationCard/v1.0/NavigationCard.jsx'
import RadioInput from '@/app/components/RadioInput/v1.0/RadioInput.jsx'

const panelComponents = [
    { name: "ประวัติการติดต่อ", panelname: "history", component: <h5>ประวัติการติดต่อ</h5>},
    { name: "รายการโอนโค๊ด", panelname: "tranfertranscode", component: <h5>รายการโอนโค๊ด</h5>}
];

export default function MainPanel() {
  const personal = useSelector(s => s.customer.personal)
  const carinfo = useSelector(s => s.customer.carinfo)
  const { panels } = useSelector(s => s.ui.panelstack)
  const token = useSelector(s => s.dynamicurl.token)
  const dynamicurl = useSelector(s => s.dynamicurl.dynamicurl)
  const keys = useSelector(s => s.dynamicurl.keys)

  const dispatch = useDispatch()
  const fnShowPanels = (name) => dispatch({ type: 'ui/fnShowPanels', payload: { name: name} })
  const fnHidePanels = (name) => dispatch({ type: 'ui/fnHidePanels', payload: { name: name} })
  const fnSetInfo = (obj) => dispatch({ type: 'customer/setinfo', payload: obj })
  const fnSetCarInfo = (obj) => dispatch({ type: 'customer/setcarinfo', payload: obj })
  const setDynamicUrl = (obj) => dispatch({ type: 'dynamicurl/setDynamicUrl', payload: obj })

  useEffect(() => { /* fetch only when first load..  */
    async function init() {
      /* call api dynamic url */
      let res2 = await fnApiNodeRedPostDynamicUrl('https://localhost:3000/', '3000')
      const objDynamicurl = res2.result.data
      setDynamicUrl(objDynamicurl)

      /* call api dynamic url */
      var data = {
        timestamp: String(new Date().getTime())
      }
      if (objDynamicurl) {
        const res = await fnAPIPostProxy(objDynamicurl.apis.apiproxy + '/proxy/v1.0', data, token, keys.psent.fnGetOptionAccountDept, "", function (err, res) {
          if (err) {
            console.log(err)
          }
          
          console.log("fnGetOptionAccountDept")
          console.log(res)
        })
      }
    } 
    
    init();
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    if (value === 'ok') {
      dispatch(fnShowPanels('kycPanel'))
    } else {
      dispatch(fnHidePanels('kycPanel'))
    }
    console.log('dynamicurl click', dynamicurl)
  }

  return (<>
    {panels.includes('mainPanel') && <>
        <div className='row mb-3' style={{ paddingRight: '5rem', paddingLeft: '1rem' }}>
            <div className="col-6 p-2">
              <Card name="ข้อมูลลูกค้า" color={'blue'}>
                  <div className='row'>
                    <Input name="ชื่อ" id="customername" 
                          value={`${personal.nameth} `} 
                          isdisabled={true} col={6} />

                    <Input name="ระดับลูกค้า" id="rankcustomer" 
                          isdisabled={true} col={6} />
                    
                    <Input name="รถยนต์" id="carband" 
                          value={`ยี่ห้อ ${carinfo.carband} รุ่น ${carinfo.carmodel || '-'} ปี ${carinfo.caryear}`} 
                          isdisabled={true} col={6} />

                    <Input name="" id="customername"
                          isdisabled={true} col={6} />

                    <Input name="ประกันหมดอายุ" id="insureExpireDate" 
                          value={fnDisplayDateinTH(carinfo.expdate) || '-'} 
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
                    สวัสดีค่ะ ดิฉัน Test-ชลธิชา Test-จันทร์เพ็ญ ติดต่อมาจากบริษัทซิลค์สแปน
                    จากที่คุณ มุแดง สายฟ้า ได้เข้ามาที่ซิลค์สแปนดอทคอม เพื่อคำนวณเบี้ยประกันภัยรถยนต์
                    ดิฉัน เป็นผู้เชี่ยวชาญด้านประกันภัยรถ HEV SMART AT 2.5 CC 4 DOORS โดยเฉพาะ
                    เพื่อให้คุณ มุแดง สายฟ้า ได้รับประกันภัยจากบริษัทที่ดีและคุ้มค่าที่สุดในปีนี้
                    พร้อมโปรโมชั่นและบริการเสริมมูลค่ากว่า 4,000 นะคะ

                    ก่อนอื่นขอแจ้งเลขที่ใบอนุญาตนายหน้าประกันภัยตามระเบียบ คปภ.รหัสนายหน้า 6604001768 ค่ะ

                    ทางเราขออนุญาต บันทึกไฟล์เสียงสนทนา เพื่อนำมาใช้ในการปรับปรุงการให้บริการนะคะ
                </p>
                </Card>
            </div>
            
            <div className="col-6 p-2">
              <Card name="สถานะการโทร">
                <div className='d-flex'>
                  <RadioInput groupRadio="callStatus" name="สะดวกคุย" value="ok" col={4} onChange={handleChange} />
                  <RadioInput groupRadio="callStatus" name="ไม่สะดวกคุย" value="busy" col={4} onChange={handleChange} />
                  <RadioInput groupRadio="callStatus" name="ไม่รับสาย / ฝากข้อความ" value="misscall" col={4} onChange={handleChange} />
                </div>
                <div className='d-flex'>
                  <RadioInput groupRadio="callStatus" name="ซื้อไปแล้ว" col={4} value="buyed" onChange={handleChange} />
                  <RadioInput groupRadio="callStatus" name="อีกตั้งนานกว่าจะหมด" value="longtime" col={4} onChange={handleChange} />
                </div>
                <div className='d-flex'>
                  <RadioInput groupRadio="callStatus" name="ไม่มีรถ" col={4} value="nocar" onChange={handleChange} />
                  <RadioInput groupRadio="callStatus" name="ไม่ได้ใช้รถ" col={4} value="notuse" onChange={handleChange} />
                  <RadioInput groupRadio="callStatus" name="ขายรถแล้ว" col={4} value="sellcar" onChange={handleChange} />
                </div>
                <div className='d-flex'>
                  <RadioInput groupRadio="callStatus" name="ตามกรมธรรม์, งานหลังขาย" col={4} value="aftersale"  onChange={handleChange} />
                  <RadioInput groupRadio="callStatus" name="ไม่ต้องการรับการติดต่อ" col={4} value="nocall"  onChange={handleChange} />
                  <RadioInput groupRadio="callStatus" name="ไม่พอใจบริการ" col={4} value="notsatisfied" onChange={handleChange} />
                </div>
                <div className='d-flex'>
                  <RadioInput groupRadio="callStatus" name="เบอร์เสีย" col={4} value="delete" onChange={handleChange} />
                  <RadioInput groupRadio="callStatus" name="ชื่อซ้ำ" col={4} value="dup" onChange={handleChange} />
                </div>
              </Card>
            </div>
        </div>
    </>}
  </>)
}
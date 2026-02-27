'use client'

import Input from '@/components/Input/v1.0/Input'
import Card from '@/components/Card/v1.0/Card'
import Button from '@/components/Button/v1.0/Button'
import NavigationCard from '@/components/NavigationCard/v1.0/NavigationCard'

export default function ResultPanel() {

  return (
    <>
        <div className='row mb-3' style={{ paddingRight: '5rem', paddingLeft: '1rem' }}>
            <div className="col-12 p-2">
                <Card name='ผลการติดต่อ'>
                    { true && <div className="col-12 mb-3">
                        <NavigationCard 
                            color='transparent' 
                            panelComponents={
                                [
                                    { name: 'นัดคุย', nameclass: 'appointTab', icon: 'bi bi-calendar2-month-fill' }, 
                                    { name: 'ไม่ซื้อ', nameclass: 'cancelTab', icon: 'bi bi-x-lg' }, 
                                    { name: 'ตกลงซื้อ', nameclass: 'buyTab', icon: 'bi bi-currency-dollar' }
                                ]} 
                        />
                    </div>}
                    
                    <div className='row'>
                        <div className='col-6'>
                            <Card name='ตารางนัด'>
                            
                            </Card>
                        </div>
                        <div className='col-6'>
                            <Card name='รายละเอียดเพิ่มเติม '>
                            
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="col-12">
                <Button name='บันทึกข้อมูล' icon='bi bi-check-lg' handleButton={()=>{  }} /> 
            </div>
        </div>
        
    </>)
}
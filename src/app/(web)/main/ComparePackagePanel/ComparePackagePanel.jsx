'use client'

import Card from '@/components/Card/v1.0/Card'
import Accordion from '@/components/Accordion/v1.0/Accordion'

export default function ComparePackagePanel() {

  return (
    <>
        <div className='row mb-3' style={{ paddingRight: '5rem', paddingLeft: '1rem' }}>
            <div className="col-12">
                <Card name=' ตารางเปรียบเทียบเบี้ยประกัน'>
                   <Accordion 
                        id="pgkCompareAccordion"
                        array={[
                            { topic: "Best Seller" },
                            { topic: "โปรโมชั่นตามบริษัทประกันภัย" },
                            { topic: "ประเภท 1 (ไม่ระบุชื่อ)" },
                            { topic: "ประเภท 1 (Low Cost)" }
                        ]}
                    />
                </Card>
            </div>
        </div>
    </>)
}
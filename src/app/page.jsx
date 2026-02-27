'use client'

import { useSelector } from 'react-redux'

/* Component */
import Navbar from '@/components/navbar/v1.0/Navbar'
import Offcanvas from '@/components/offcanvas/v1.0/Offcanvas'
import FloatingSection from '@/components/floatingsection/v1.0/FloatingSection'
/* Component */

/* OffCanvas */
import Promotion from '@/app/(web)/(floatingsection)/Promotion/Promotion'
import Prominent from '@/app/(web)/(floatingsection)/Prominent/Prominent'
import Lineframe from '@/app/(web)/(floatingsection)/Lineframe/Lineframe'
import Salescript from '@/app/(web)/(floatingsection)/Salescript/Salescript'
import Customerprofile from '@/app/(web)/(floatingsection)/Customerprofile/Customerprofile'
import FAQ from '@/app/(web)/(floatingsection)/FAQ/FAQ'
import Othertool from '@/app/(web)/(floatingsection)/Othertool/Othertool'
/* OffCanvas */

/* Body */
import MainPanel from '@/app/(web)/main/MainPanel/MainPanel'
import KYCPanel from '@/app/(web)/main/KYCPanel/KYCPanel'
import ResultPanel from '@/app/(web)/main/ResultPanel/ResultPanel'
import ComparePackagePanel from '@/app/(web)/main/ComparePackagePanel/ComparePackagePanel'
/* Body */

export default function Page() {
  const { open, name } = useSelector(s => s.ui.offcanvas)
  const { panels } = useSelector(s => s.ui.panelstack)

  return (
    <>
      <Navbar />
      <FloatingSection />
      <Offcanvas open={open} name={name}>
        {name === "promotion" && <Promotion />}
        {name === "prominent" && <Prominent />}
        {name === "lineframe" && <Lineframe />}
        {name === "salescript" && <Salescript />}
        {name === "customerprofile" && <Customerprofile />} 
        {name === "FAQ" && <FAQ />} 
        {name === "othertool" && <Othertool />} 
      </Offcanvas>

      <div className="containner bg-gray">
        {panels.includes('mainPanel') && <MainPanel />}
        {panels.includes('kycPanel') && <KYCPanel />}
        {panels.includes('comparePackagePanel') && <ComparePackagePanel />}
        {<ResultPanel />}
      </div>
    </>
  )
}
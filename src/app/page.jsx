'use client'

import { useSelector } from 'react-redux'

/* Component */
import Navbar from './components/navbar/v1.0/Navbar'
import Offcanvas from './components/offcanvas/v1.0/Offcanvas'
import FloatingSection from './components/floatingsection/v1.0/FloatingSection'
/* Component */

/* OffCanvas */
import Promotion from './(web)/(floatingsection)/Promotion/Promotion'
import Prominent from './(web)/(floatingsection)/Prominent/Prominent'
import Lineframe from './(web)/(floatingsection)/Lineframe/Lineframe'
import Salescript from './(web)/(floatingsection)/Salescript/Salescript'
import Customerprofile from './(web)/(floatingsection)/Customerprofile/Customerprofile'
import FAQ from './(web)/(floatingsection)/FAQ/FAQ'
import Othertool from './(web)/(floatingsection)/Othertool/Othertool'
/* OffCanvas */

/* Body */
import MainPanel from './(web)/main/MainPanel/MainPanel'
import KYCPanel from './(web)/main/KYCPanel/KYCPanel'
import ResultPanel from './(web)/main/ResultPanel/ResultPanel'
import ComparePackagePanel from './(web)/main/ComparePackagePanel/ComparePackagePanel'
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
'use client'
import { useDispatch } from 'react-redux'
import Image from "next/image";
import Styles from './FloatingSection.module.css'

export default function FloatingSection() {
    const dispatch = useDispatch()
    const fnOpen = (name) => dispatch({ type: 'ui/openOffcanvas', payload: { name: name }})
    const baseurl = process.env.NEXT_PUBLIC_BASE_PATH
    return (
        <div className={Styles['sectionFloatButton']}>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('lineframe')} >
                <Image src={`${baseurl}/assets/images/line-frame-icon-red2.png`} width="50" height="50" alt="asd" 
                className={[ Styles.icon, Styles.roundedCircle, 'bg-red', 'p-1'].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('salescript')} >
                <Image src={`${baseurl}/assets/images/floatbutton/script.png`} width="50" height="50" alt="asd" 
                className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('customerprofile')} >
                <Image src={`${baseurl}/assets/images/floatbutton/info.png`} width="50" height="50" alt="asd" 
                className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('FAQ')} >
                <Image src={`${baseurl}/assets/images/floatbutton/question.png`} width="50" height="50" alt="asd" 
                className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('promotion')} >
                <Image src={`${baseurl}/assets/images/floatbutton/promotion.png`} width="50" height="50" alt="asd" 
                className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('prominent')} >
                <Image src={`${baseurl}/assets/images/floatbutton/highlights.png`} width="50" height="50" alt="asd" 
                className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('')} >
                <Image src={`${baseurl}/assets/images/floatbutton/print.png`} width="50" height="50" alt="asd" 
                className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('othertool')} >
                <i className="bi bi-three-dots"></i>
            </button>
        </div>
    );
} 

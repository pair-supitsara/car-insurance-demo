'use client'
import { useDispatch } from 'react-redux'
import Styles from './FloatingSection.module.css'

export default function FloatingSection() {
    const dispatch = useDispatch()
    const fnOpen = (name) => dispatch({ type: 'ui/openOffcanvas', payload: { name: name }})

    return (
        <div className={Styles['sectionFloatButton']}>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('lineframe')} >
                <img src="./assets/images/line-frame-icon-red2.png" className={[ Styles.icon, Styles.roundedCircle, 'bg-red', 'p-1'].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('salescript')} >
                <img src="./assets/images/floatbutton/script.png" className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('customerprofile')} >
                <img src="./assets/images/floatbutton/info.png" className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('FAQ')} >
                <img src="./assets/images/floatbutton/question.png" className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('promotion')} >
                <img src="./assets/images/floatbutton/promotion.png" className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('prominent')} >
                <img src="./assets/images/floatbutton/highlights.png" className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('')} >
                <img src="./assets/images/floatbutton/print.png" className={[ Styles.icon, Styles.roundedCircle ].join(' ')} title="ไลน์" />
            </button>
            <button className={` ${Styles['button']}`} onClick={() => fnOpen('othertool')} >
                <i className="bi bi-three-dots"></i>
            </button>
        </div>
    );
} 

/*<button className="" type="button" onClick={() => fnOpen('promotion')} >
    promotion
</button>
<button className="" type="button" onClick={() => fnOpen('prominent')} >
    prominent
</button>*/
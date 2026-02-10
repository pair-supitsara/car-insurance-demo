'use client'

import Styles from './Prominent.module.css'

const images = [
    "/assets/images/prominent/bki.jpg",
    "/assets/images/prominent/jmart.png",
    "/assets/images/prominent/chubb.jpg",
    "/assets/images/prominent/dhipaya.jpg",
    "/assets/images/prominent/deves.jpg",
    "/assets/images/prominent/tvi.png",
    "/assets/images/prominent/tni.jpg",
    "/assets/images/prominent/navakij.jpg",
    "/assets/images/prominent/muangthai.jpg",
    "/assets/images/prominent/viriyah.jpg",
    "/assets/images/prominent/msig.jpg",
    "/assets/images/prominent/lmg.jpg"
];

export default function Prominent({ }) {

    return (
        <div className="boxProminent">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`image-${index}`} className={Styles.imag}></img>
            ))}
        </div>
    );
}
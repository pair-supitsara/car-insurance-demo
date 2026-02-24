'use client'
import Image from "next/image";

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
    const baseurl = process.env.NEXT_PUBLIC_BASE_PATH
    return (
        <div className="boxProminent">
            {images.map((src, index) => (
                <Image 
                    key={index} 
                    src={`${baseurl}${src}`} 
                    alt={`image-${index}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            ))}
        </div>
    );
}
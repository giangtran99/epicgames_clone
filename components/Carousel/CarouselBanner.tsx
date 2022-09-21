import { FC } from 'react'
import Image from 'next/image'



interface CarouselBannerProps {
    autoPlay?: boolean
    listItems: any[]
}


const CarouselBanner: FC<CarouselBannerProps> = ({ listItems }) => {
    return <>
        <div >
            <div id='left' className='w-screen'>
                <Image
                    layout='fill'
                    alt="Your Name"
                    src={"/images/sliderItem/Input.jpeg"} />
            </div>

            {/* <div id='right'>
                <div>
                    <Image layout='fill' src={"/images/thumbnail/egs-fall-guys-s2-carousel-thumb-315x399-db76b5000c88.jpeg"} />

                </div>
                <div>
                    <span>Fall guys</span>
                </div>

            </div> */}
        </div>

    </>
}


export default CarouselBanner
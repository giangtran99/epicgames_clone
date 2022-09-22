import { FC } from 'react'
import Image from 'next/image'



interface CarouselBarProps {
    autoPlay?: boolean
    listItems: any[]
}


const CarouselBar: FC<CarouselBarProps> = ({ listItems }) => {
    return <>
        <div>
            <Image
                height={144}
                width={144}
                alt="Your Name"
                src={"/images/sliderItem/Input.jpeg"} 
            />
        </div>
        <div>

        </div>
    </>
}


export default CarouselBar
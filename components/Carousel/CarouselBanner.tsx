import { FC, useRef } from 'react'
import Image from 'next/image'



interface CarouselBannerProps {
    autoPlay?: boolean
    listItems: any[]
}


const CarouselBanner: FC<CarouselBannerProps> = ({ listItems }) => {
    return <>
        <div className='h-[500px] grid grid-cols-5 grid-rows-6 gap-4 mt-[30px] '>
          
            <div className='row-span-6 col-span-4'>
                <img
                    className='max-h-full min-h-full rounded-2xl object-contain object-top'
                    src={"/images/sliderItem/Input.jpeg"} />
            </div>
            
            {/* <div className="flex flex-col gap-1.5 h-[100px]"> */}
            {listItems.map((item, index) => {
                return <>
                    <div key={index} className="row-span-1 col-span-1">
                        <div className='rouded-xl h-[100%] flex rounded-md border bg-slate-700 p-auto'>
                            <div className='h-full'>
                                <img
                                    className='rounded max-h-[80%] min-h-[80%] object-contain'
                                    src={"/images/thumbnail/egs-fall-guys-s2-carousel-thumb-315x399-db76b5000c88.jpeg"} />
                            </div>
                            <div className='ml-5 grow'>
                                <span className='text-[1vw]'>Fall guys {item}</span>
                            </div>
                        </div>
                    </div>
                </>
            })}
        </div>

        {/* </div> */}

    </>
}


export default CarouselBanner
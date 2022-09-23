import { FC, useRef } from 'react'
import Image from 'next/image'



interface CarouselBannerProps {
    autoPlay?: boolean
    listItems: any[]
}


const CarouselBanner: FC<CarouselBannerProps> = ({ listItems }) => {
    
    return <>
        <div className='aspect-[18/9] grid grid-cols-5 grid-rows-6 gap-x-4 gap-y-1.5 mt-[30px] '>
          
            <div className='row-span-6 col-span-4'>
                <img
                    className='max-h-full min-h-full rounded-3xl'
                    src={"/images/sliderItem/Input.jpeg"} />
            </div>
            
            {/* <div className="flex flex-col gap-1.5 h-[100px]"> */}
            {listItems.map((item, index) => {
                return <>
                    <div key={index} className="row-span-1 col-span-1 rounded-2xl border bg-slate-700 flex">
                        <div className='rouded-xl h-[80%] w-[80%] flex my-auto ml-4'>
                            <div className='xl:h-[90%] sm:h-[70%] aspect-[15/19] my-auto'>
                                <img
                                    className='rounded-md max-h-full min-h-full'
                                    src={"/images/thumbnail/egs-fall-guys-s2-carousel-thumb-315x399-db76b5000c88.jpeg"} />
                            </div>
                            <div className='ml-3 m-auto'>
                                <span className='xl:text-sm lg:text-tiny'>The Rockstart Game Sale {item}</span>
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
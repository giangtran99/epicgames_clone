import { FC, useRef } from 'react'
import Image from 'next/image'



interface CarouselBannerProps {
    autoPlay?: boolean
    listItems: any[]
}


const CarouselBanner: FC<CarouselBannerProps> = ({ listItems }) => {
    console.log("@@listItems", listItems)
    return <>
        <div className='h-[450px] grid grid-cols-5 gap-2 mt-[30px] grid grid-rows-6'>
            <div className='h-inherit col-span-4 row-span-6'>
                <img

                    className='rounded-2xl max-w-full max-h-full object-contain object-top'
                    src={"/images/sliderItem/Input.jpeg"} />
            </div>

            <div className="flex flex-col gap-1.5 row-span-1">
                {listItems.map((item, index) => {
                    return <>
                        <div key={index} className={`rouded-xl flex h-[100px] rounded-md border bg-slate-700 p-auto`}>
                            <div className='h-inherit'>
                                <img
                                    className='rounded max-h-[80%] min-h-[80%] object-contain object-center'
                                    src={"/images/thumbnail/egs-fall-guys-s2-carousel-thumb-315x399-db76b5000c88.jpeg"} />
                            </div>
                            <div className='ml-5 grow'>
                                <span className='text-[1vw]'>Fall guys {item}</span>
                            </div>
                        </div>
                    </>
                })}
            </div>

        </div>

    </>
}


export default CarouselBanner
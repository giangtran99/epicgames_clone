import { FC, useRef } from 'react'



interface CarouselBannerProps {
    autoPlay?: boolean
    listItems: any[]
}


const mobile = {
    "left": "mobile:basis-full",
    "right": "mobile:hidden"
}


const CarouselBanner: FC<CarouselBannerProps> = ({ listItems }) => {

    return <>
        <div className='flex flex-row gap-x-4'>
            <div className={`h-full basis-5/6 ${mobile.left}`}>
                <picture>
                    <source media="(max-width:841px)" srcSet="/images/thumbnail/egs-fall-guys-s2-carousel-thumb-315x399-db76b5000c88.jpeg" />
                    <img className={`rounded-2xl h-full`} src={"/images/sliderItem/Input.jpeg"} />
                </picture>
            </div>
            <div className={`basis-1/6 flex flex-col justify-between ${mobile.right} gap-y-2`}>

                {listItems.map((item, index) => {
                    return <>
                        <div className='h-[16%] '>
                            <div key={index} className='bg-slate-300 opacity-4 rounded-xl bp-2:rounded-lg border h-[100%] flex flex-row my-auto'>
                                <div className='my-auto ml-2 basis-1/4'>
                                    <img className='bp-3:rounded rounded-lg'src={`${item.thumbnailUrl}`} />
                                </div>
                                <div className='ml-3 m-auto basis-2/4'>
                                    <span className='text-sm'>{item.name.length > 20 ? `${item.name.split(" ")[0]} ${item.name.split(" ")[1]} ...`: item.name}</span>
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </div>

        </div>
     
    </>
}


export default CarouselBanner
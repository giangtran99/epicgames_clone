import { FC, useRef } from 'react'



interface CarouselBannerProps {
    autoPlay?: boolean
    listItems: any[]
}


const CarouselBanner: FC<CarouselBannerProps> = ({ listItems }) => {

    return <>

        <div className='flex'>
            <div className='h-full'>
                <img
                    className='rounded-2xl w-[80%] h-full object-contain'
                    src={"/images/sliderItem/Input.jpeg"} />
            </div>
            <div className='bg-black w-[30%] h-auto flex-col'>

                {/* {listItems.map((item, index) => {
                    return <>
                        <div className='h-[5%] mt-[5%]'>
                            <div key={index} className='rounded-xl border w-full h-full flex my-auto'>
                                <div className='h-[80%] srn-2:h-[80%] my-auto'>
                                    <img
                                        className='rounded-lg w-full h-full'
                                        src={"/images/thumbnail/egs-fall-guys-s2-carousel-thumb-315x399-db76b5000c88.jpeg"} />
                                </div>
                                <div className='ml-3 m-auto flex'>
                                    <span className='text-tiny srn-1:text-sm'>The Rockstart Game Sale {item}</span>
                                </div>
                            </div>
                        </div>


                    </>
                })} */}
            </div>

        </div>
        {/* <div className='aspect-[16/9] grid srn-4:grid-cols-8 grid-cols-10 grid-rows-6 gap-x-4 gap-y-1.5 mt-[30px] '>
          
            <div className='row-span-6 col-span-7 srn-4:col-span-6'>
                <img
                    className='max-h-full min-h-full rounded-2xl'
                    src={"/images/sliderItem/Input.jpeg"} />
            </div>
            
          
            {listItems.map((item, index) => {
                return <>
                    <div key={index} className="row-span-1 col-span-3 srn-4:col-span-2 rounded-lg border bg-slate-700 flex">
                        <div className='rouded-xl h-[80%] w-[80%] flex my-auto ml-[4%]'>
                            <div className='aspect-[15/19] h-[90%] srn-2:h-[100%] my-auto'>
                                <img
                                    className='rounded-lg'
                                    src={"/images/thumbnail/egs-fall-guys-s2-carousel-thumb-315x399-db76b5000c88.jpeg"} />
                            </div>
                            <div className='ml-3 m-auto flex'>
                                <span className='text-tiny srn-1:text-sm'>The Rockstart Game Sale {item}</span>
                            </div>
                        </div>
                    </div>
                </>
            })}
        </div> */}



    </>
}


export default CarouselBanner
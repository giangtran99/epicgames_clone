import { FC, useEffect, useState } from 'react'
import useLatestState from '../../hooks/useLatestState'
import { AddIcon } from '@chakra-ui/icons'


interface CarouselBannerProps {
    autoPlay?: boolean
    listItems: any[]
}






const CarouselBanner: FC<CarouselBannerProps> = ({ listItems }) => {
    const [currentItem, setCurrentItem] = useState<number>(1)
    const [progressAnimation, setProgressAnimation] = useState<string>("animate-progress_loading")
    const slideItem = (id: number) => {
        setCurrentItem(id)
        // document.getElementById(`progress-bar-${id.toString()}`)!.className += "animate-progress_loading"


    }

    // const loopSlider = async () => {
    //     let latestCurrentItem = await useLatestState(setCurrentItem)
    //     console.log("@@latestCurrentItem", latestCurrentItem)
    //     // console.log("@@currentItem",currentItem)
    //     let nextCurrentItem: number
    //     nextCurrentItem = latestCurrentItem + 1
    //     if (nextCurrentItem > listItems.length) { nextCurrentItem = 1 }
    //     setTimeout(() => {
    //         slideItem(nextCurrentItem)
    //         loopSlider()
    //     }, 3000)
    // }

    useEffect(() => {

        const id = setInterval(async () => {
            let latestCurrentItem = await useLatestState(setCurrentItem)
            console.log("@@latestCurrentItem", latestCurrentItem)
            // console.log("@@currentItem",currentItem)
            let nextCurrentItem: number
            nextCurrentItem = latestCurrentItem + 1
            if (nextCurrentItem > listItems.length) { nextCurrentItem = 1 }
            slideItem(nextCurrentItem)
            setProgressAnimation("animate-progress_loading")
        }, 4000)
        return () => clearInterval(id)
        // loopSlider()
    }, [])


    const isCurrentItem = (id: number | string): any => {
        return id === currentItem ? true : false
    }

    const getElipsisString = (description: string) => {
        let maxLength = 100 // maximum number of characters to extract
        //trim the string to the maximum length
        let trimmedString = description.substr(0, maxLength);
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        return `${trimmedString} ...`
    }

    return <>
        <div className='flex flex-row gap-x-4'>




            {listItems.map((item) => {
                return <>

                    <div key={item.id} id={item.id} className={`relative h-full basis-5/6 mobile:basis-full animate-slide ${isCurrentItem(item.id) ? "" : "hidden"}`}>
                        <div className={`absolute bottom-0 p-10 w-[40%] mobile:w-[90%] mobile:hidden`}>
                            <h1 className='text-xl antialiased leading-4 font-black'>{item.name}</h1>
                            <h1 className='antialiased mt-5'>{getElipsisString(item.description)}</h1>
                            <p className='mt-5'>Starting at <span className='font-semibold'>{item.price}$</span></p>
                            <div className='mt-7 flex flex-row'>
                                <a className='bg-white border text-black rounded p-3 basis-1/2 text-center' href={`/${item.nameAlias}`}>BUY NOW</a>
                                <button className='rounded ml-3 basis-1/2 hover:border hover:bg-[rgba(192,192,192,0.3)] p-2 text-white text-[10px]'>
                                    <div className='flex flex-row'>
                                    <AddIcon boxSize={"2em"} className='border border-white border-[2px] rounded-full p-1 '/>
                                  <span className='my-auto ml-2 basis-3/4'>  ADD TO WISHLIST</span>
                                    </div>
                                
                                    </button>
                            </div>
                        </div>
                        <div>
                            <picture>
                                <source media="(max-width:841px)" srcSet={item.thumbnailUrl} />
                                <img className={`rounded-2xl h-full`} src={item.imageUrl} />
                            </picture>
                        </div>

                    </div>

                </>
            })}


            <div className={`basis-1/6 flex flex-col justify-between mobile:hidden gap-y-2`}>

                {listItems.map((item) => {
                    return <>
                        <div key={item.id} className={`h-[16%] relative`} onClick={() => slideItem(item.id)}>
                            <div key={item.id} id={`progress-bar-${item.id}`} className={`${progressAnimation} absolute rounded-l-xl h-[100%] ${isCurrentItem(item.id) ? `bg-[rgba(192,192,192,0.3)] ` : ""}`}>

                            </div>
                            <div className={`hover:bg-[rgba(0,0,0,0.5)] ${isCurrentItem(item.id) ? "bg-[rgba(0,0,0,0.5)]" : ""} rounded-xl bp-2:rounded-lg h-[100%] flex flex-row my-auto`}>
                                <div className='my-auto ml-2 basis-1/4'>
                                    <img className='bp-3:rounded rounded-lg' src={`${item.thumbnailUrl}`} />
                                </div>
                                <div className='ml-3 m-auto basis-2/4'>
                                    <span className='text-sm'>{item.name.length > 20 ? `${item.name.split(" ")[0]} ${item.name.split(" ")[1]}...` : item.name}</span>
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
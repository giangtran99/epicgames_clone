import { FC, useEffect,useState } from 'react'
import Image from 'next/image'
import {ChevronLeftIcon,ChevronRightIcon} from '@chakra-ui/icons'


interface CarouselBarProps {
    autoPlay?: boolean
    listItems: any[]
    title:string
}



const CarouselBar: FC<CarouselBarProps> = ({ listItems ,title = "Game On Sales"}) => {
    const [stepRange,setStepRange] = useState<number>(5)
    const getFrameItem = (startPoint:number,stepRange:number)=>{
        return [startPoint,startPoint + stepRange]
    }
    useEffect(() => {
        window.addEventListener("resize", () => {
            
        })
    }, [])

    return <>
        <div className='flex flex-row'>
            <div>
                <h2>{title}</h2>
            </div>
            <div >
                <ChevronLeftIcon/ >
                <ChevronRightIcon/>
            </div>
        </div>
        <div className='flex flex-row flex-wrap gap-x-4 mt-3'>
            {listItems.slice(getFrameItem(0,stepRange)[0] , getFrameItem(0,stepRange)[1]).map((item: any) => {
                return <>
                    <div className='basis-1/5'>
                        <img className='rounded' src={`${item.thumbnailUrl}`}></img>
                    </div>
                </>
            })}
        </div>

    </>
}


export default CarouselBar
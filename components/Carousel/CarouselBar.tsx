import { FC, useEffect, useRef, useState } from 'react'


interface CarouselBarProps {
    autoPlay?: boolean
    listItems: any[]
    title: string
}



const CarouselBar: FC<CarouselBarProps> = ({ listItems, title = "Game On Sales" }) => {
    const [stepRange, setStepRange] = useState(5)
    const [startPoint, setStartPoint] = useState(0)
    console.log("@@listItems", listItems)
    const getFrameItem = (startPoint: number, stepRange: number) => {
        return [startPoint, startPoint + stepRange]
    }
    useEffect(() => {
        window.addEventListener("resize", () => {

        })
    }, [])

    console.log("@@startPoint",startPoint)

    const move = (action: "prev" | "next", startPoint: number, stepRange: number) => {
        switch (action) {
            case "prev":
                startPoint < stepRange ?
                    setStartPoint(startPoint - 1 ) : setStartPoint(startPoint - stepRange)
                return
            case "next":
                const countRestItem = listItems.length - (startPoint + stepRange)
                console.log("@@countRestItem", countRestItem)
                countRestItem < stepRange ?
                    setStartPoint(listItems.length - stepRange) : setStartPoint(startPoint + stepRange)
                return
            default:
                return
        }
    }
    return <>
        <div className='flex flex-row place-content-between'>
            <div className='flex items-center'>
                <h2 className='leading-[8px]'>{title}</h2>
            </div>
            <div className='flex flex-row'>

                <svg viewBox="0 0 24 24" focusable="false" className="rounded-full mr-2 border-2 w-[28px] h-[28px]"
                    onClick={() => move("prev", startPoint, stepRange)}

                >
                    <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z">
                    </path>
                </svg>

                <svg viewBox="0 0 24 24" focusable="false" className="rounded-full border-2 w-[28px] h-[28px]"
                    onClick={() => move("next", startPoint, stepRange)}
                >
                    <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z">
                    </path>
                </svg>
            </div>
        </div>
        <div className='flex flex-row flex-wrap gap-x-[1.5%] mt-3 place-content-between'>
            {listItems.slice(getFrameItem(startPoint, stepRange)[0], getFrameItem(startPoint, stepRange)[1]).map((item: any) => {
                return <>
                    <div className='basis-[18.5%]'>
                        <img className='rounded' src={`${item.thumbnailUrl}`}></img>
                    </div>
                </>
            })}
        </div>

    </>
}


export default CarouselBar
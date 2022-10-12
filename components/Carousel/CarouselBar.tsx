import { FC, useEffect, useState } from 'react'


interface CarouselBarProps {
    autoPlay?: boolean
    listItems: any[]
    title: string
}

const CarouselBar: FC<CarouselBarProps> = ({ listItems, title = "Game On Sales" }) => {
    const [stepRange, setStepRange] = useState(5)
    const [startPoint, setStartPoint] = useState(0)

    console.log("@@listItems.length ",listItems.length )
    const getFrameItem = (startPoint: number, stepRange: number) => {
        return [startPoint, startPoint + stepRange]
    }
    useEffect(() => {
        window.addEventListener("resize", () => {

        })
    }, [])


    const move = (action: "prev" | "next", startPoint: number, stepRange: number) => {
        const element = document.getElementsByClassName(`${startPoint}`)
        switch (action) {
            case "prev":
                startPoint < stepRange ? setStartPoint(startPoint - 1) : setStartPoint(startPoint - stepRange)
                return
            case "next":
                const countRestItem = listItems.length - (startPoint + stepRange)
                countRestItem < stepRange ? setStartPoint(listItems.length - stepRange) : setStartPoint(startPoint + stepRange)
                return
            default:
                return
        }
    }
    return <>
        <div className='flex flex-row place-content-between'>
            <div className='flex items-center'>
                <h2 className='leading-[8px] text-lg font-medium'>{title}</h2>
            </div>
            <div className='flex flex-row'>

                <svg viewBox="0 0 24 24" focusable="false" className="rounded-full bg-gray-700 mr-2 border-2 w-[28px] h-[28px]"
                    onClick={() => move("prev", startPoint, stepRange)}
                >
                    <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z">
                    </path>
                </svg>

                <svg viewBox="0 0 24 24" focusable="false" className="rounded-full bg-gray-700 border-2 w-[28px] h-[28px]"
                    onClick={() => move("next", startPoint, stepRange)}
                >
                    <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z">
                    </path>
                </svg>
            </div>
        </div>
        <div>
            <div className='overflow-x-scroll bordered'>

                <div className={`inline-flex mt-3 h-[300px] gap-x-7 `}>
                    {listItems.map((item: any) => {
                        return <>
                            <div className={`w-[200px]`}>
                                <img className='rounded' src={`${item.thumbnailUrl}`}></img>
                            </div>
                        </>
                    })}
                </div>
          
            </div>
        </div>


    </>
}


export default CarouselBar
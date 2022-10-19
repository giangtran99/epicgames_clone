import { FC, useEffect, useRef } from 'react'


interface CarouselBarProps {
    autoPlay?: boolean
    listItems: any[]
    title: string
}

const CarouselBar: FC<CarouselBarProps> = ({ listItems, title = "Game On Sales" }) => {
    const itemsPerPage = 5;
    const numberOfPage = Math.ceil(listItems.length / itemsPerPage)
    const currentFrameRef = useRef(1)

    const handleSrollBar = () => {
    }
    useEffect(() => {
        handleSrollBar()
    }, [])

    const Page = {
        skip: (currentPage: number) => {
            const numberOfRestItem = listItems.length % itemsPerPage
            const numberOfRestItemsInLastPage = numberOfRestItem === 0 ? 5 : numberOfRestItem
            if (currentPage === numberOfPage) return (currentPage * itemsPerPage) - (itemsPerPage - numberOfRestItemsInLastPage)
            return currentPage * itemsPerPage
        },
        limit: () => {
            return itemsPerPage
        }
    }

    const slideNext = () =>{

        document.getElementById("scroll-bar")?.scrollTo((currentFrameRef.current-1)*1152 + 1152, (currentFrameRef.current -1)*1152);
        if(currentFrameRef.current < numberOfPage){
            currentFrameRef.current+=1
        }

        console.log("@@currentFrameRef.current",currentFrameRef.current)

    }

    const slidePrev = () =>{
        document.getElementById("scroll-bar")?.scrollTo((currentFrameRef.current-2)*1152 , (currentFrameRef.current-1)*1152 + 1152);
        console.log("@@ao",(currentFrameRef.current-1)*1152 + 1152)
        if(currentFrameRef.current > 1){
            currentFrameRef.current-=1
        }
        console.log("@@currentFrameRef.current",currentFrameRef.current)

    }


    const renderPagingListItem = () => {
        return <>
            {Array(numberOfPage).fill(null).map((value, currentPage) => {
                let end = Page.skip(currentPage + 1)
                let start = Page.skip(currentPage + 1) - Page.limit()
                return (<>
                    <div key={currentPage + 1} className='inline-block gap-x-3'>
                        <div className={`flex flex-wrap mt-3 justify-between`}>
                            {listItems.slice(start, end).map((item: any) => {
                                return <>
                                    <div key={item.id} className={`basis-[19%]`}>
                                        <img className='rounded' src={`${item.thumbnailUrl}`}></img>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </>)
            })}
        </>
    }

    return <>
        <div className='flex flex-row place-content-between'>
            <div className='flex items-center'>
                <h2 className='leading-[8px] text-lg font-medium'>{title}</h2>
            </div>
            <div className='flex flex-row'>

                <svg viewBox="0 0 24 24" focusable="false" className="rounded-full bg-gray-700 mr-2 border-2 w-[28px] h-[28px]"
                    onClick={slidePrev}
                >
                    <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z">
                    </path>
                </svg>
                <svg viewBox="0 0 24 24" focusable="false" className="rounded-full bg-gray-700 border-2 w-[28px] h-[28px]"
                onClick={slideNext}
                >
                    <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z">
                    </path>
                </svg>
            </div>
        </div>
        <div>
            <div id="scroll-bar" className='scroll-smooth overflow-x-scroll bordered whitespace-nowrap gap-x-10'>

                {renderPagingListItem()}


                {/* <div className='inline-block'>
                    <div className={`flex flex-wrap mt-3 justify-between`}>
                        {listItems.slice(0, 5).map((item: any) => {
                            return <>
                                <div key={item.id} className={`basis-[19%]`}>
                                    <img className='rounded' src={`${item.thumbnailUrl}`}></img>
                                </div>
                            </>
                        })}
                    </div>
                </div> */}




                {/* <div className='bg-white w-[1000px] h-[300px] inline-table'>

                </div> */}

            </div>
        </div>


    </>
}


export default CarouselBar
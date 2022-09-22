
import type { NextPage } from 'next'
import Input from '../../components/Input'
import { SearchIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import { CarouselBanner } from '../../components/Carousel'


const Discover: NextPage = () => {

    const images: any = [

    ]

    return <>
        <div className='mx-[15%]'>
            <CarouselBanner listItems={[1,2]} /> 
        </div>
    </>
}



export default Discover
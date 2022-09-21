
import type { NextPage } from 'next'
import Input from '../../components/Input'
import { SearchIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import {CarouselBanner} from '../../components/Carousel'


const Discover: NextPage = () => {
 
    const images:any = [
        
    ]
    
    return <>
       <CarouselBanner listItems={images}/>
    </>
}



export default Discover
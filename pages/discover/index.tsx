
import type { NextPage } from 'next'
import Input from '../../components/Input'
import { SearchIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import { CarouselBanner } from '../../components/Carousel'


const Discover: NextPage = () => {

    const games: any = [
        {
            "id":1,
            "name":"Fall guys",
            "imageUrl":"/images/sliderItem/Input.jpeg",
            "thumbnailUrl":"/images/thumbnail/egs-fall-guys-s2-carousel-thumb-315x399-db76b5000c88.jpeg",
            "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price":1000,
            "nameAlias":"fall-guys"
        },
        {
            "id":2,
            "name":"Fornite",
            "imageUrl":"/images/sliderItem/egs-fortnite-s3-ch4-carousel-desktop-1248x702-7c74da705c65.jpeg",
            "thumbnailUrl":"/images/thumbnail/egs-fortnite-s3-ch4-carousel-thumb-1200x1600-1f45110c058e.jpeg",
            "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price":1000,
            "nameAlias":"fornite"
        },
        {
            "id":3,
            "name":"FIFA 23 Ultimate Edition",
            "imageUrl":"/images/sliderItem/egs-fifa-23-ultimate-edition-carousel-desktop-2560x1440-9d20953930de.jpeg",
            "thumbnailUrl":"/images/thumbnail/egs-fifa-23-ultimate-edition-carousel-mobile-thumb-1200x1600-6acef77266a1.jpeg",
            "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price":1000,
            "nameAlias":"fifa-23-ultimate-edition"
        },
        {
            "id":4,
            "name":"Uncharted: Legacy of Thieves",
            "imageUrl":"/images/sliderItem/egs-fn-uncharted-carousel-desktop-1920x1080-e3dc0549a62d.jpeg",
            "thumbnailUrl":"/images/thumbnail/egs-fn-uncharted-carousel-thumbnail-1200x1600-17ba243c2d07.jpeg",
            "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price":1000,
            "nameAlias":"uncharted-legacy-of-thieves"
        },
        {
            "id":5,
            "name":"The Rockstar Game Sale",
            "imageUrl":"/images/sliderItem/gtao-rdr2-publishersale-epic-desktopimage-2-nologo-1248x702-1248x702-ab7f855b3563.jpeg",
            "thumbnailUrl":"/images/thumbnail/gtao-rdr2-publishersale-epic-thumbnail-2-withlogo-1200x1600-1200x1600-34c4e394e19d.jpeg",
            "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price":1000,
            "nameAlias":"the-rockstar-game-sale"
        },
        {
            "id":6,
            "name":"A Plague Tale: Requiem",
            "imageUrl":"/images/sliderItem/egs-a-plague-tale-requiem-carousel-desktop-1248x702-25022231be7c.jpeg",
            "thumbnailUrl":"/images/thumbnail/egs-a-plague-tale-requiem-carousel-thumb-1200x1600-4a718450aabc.jpeg",
            "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price":1000,
            "nameAlias":"a-plague-tale-requiem"
        }
    ]

    return <>
        <div  className='bp-1:mx-[5%] mx-[10%]'>
            <CarouselBanner listItems={games} /> 
        </div>
    </>
}



export default Discover
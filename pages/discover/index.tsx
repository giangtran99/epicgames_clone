
import type { NextPage } from 'next'
import { SearchIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import { CarouselBanner } from '@hoanggiangg199/carousel-banner'
import { CarouselBar } from '@hoanggiangg199/carousel-bar'

import { Center, Divider } from '@chakra-ui/react'


const Discover: NextPage = () => {

    const games: any = [
        {
            "id": 1,
            "name": "Saints Row",
            "imageUrl": "/images/sliderItem/egs-saints-row-launch-carousel-desktop-1280x702-e2b42d436367.jpeg",
            "thumbnailUrl": "/images/thumbnail/egs-saints-row-launch-carousel-mobile-1200x1600-1a95929f3bf9.jpeg",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price": 1000,
            "nameAlias": "fall-guys"
        },
        {
            "id": 2,
            "name": "Fornite",
            "imageUrl": "/images/sliderItem/egs-fortnite-s3-ch4-carousel-desktop-1248x702-7c74da705c65.jpeg",
            "thumbnailUrl": "/images/thumbnail/egs-fortnite-s3-ch4-carousel-thumb-1200x1600-1f45110c058e.jpeg",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price": 1000,
            "nameAlias": "fornite"
        },
        {
            "id": 3,
            "name": "FIFA 23 Ultimate Edition",
            "imageUrl": "/images/sliderItem/egs-fifa-23-ultimate-edition-carousel-desktop-2560x1440-9d20953930de.jpeg",
            "thumbnailUrl": "/images/thumbnail/egs-fifa-23-ultimate-edition-carousel-mobile-thumb-1200x1600-6acef77266a1.jpeg",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price": 1000,
            "nameAlias": "fifa-23-ultimate-edition"
        },
        {
            "id": 4,
            "name": "Destiny 2",
            "imageUrl": "/images/sliderItem/egs-destiny-2-festival-of-the-lost-carousel-desktop-1248x702-7aa78f815cf2.webp",
            "thumbnailUrl": "/images/thumbnail/en-egs-destiny-2-festival-of-the-lost-carousel-thumb-1200x1600-7088a0da790c.webp",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price": 1000,
            "nameAlias": "destiny-2"
        },
        {
            "id": 5,
            "name": "The Rockstar Game Sale",
            "imageUrl": "/images/sliderItem/gtao-rdr2-publishersale-epic-desktopimage-2-nologo-1248x702-1248x702-ab7f855b3563.jpeg",
            "thumbnailUrl": "/images/thumbnail/gtao-rdr2-publishersale-epic-thumbnail-2-withlogo-1200x1600-1200x1600-34c4e394e19d.jpeg",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price": 1000,
            "nameAlias": "the-rockstar-game-sale"
        },
        {
            "id": 6,
            "name": "A Plague Tale: Requiem",
            "imageUrl": "/images/sliderItem/egs-a-plague-tale-requiem-carousel-desktop-1248x702-25022231be7c.jpeg",
            "thumbnailUrl": "/images/thumbnail/egs-a-plague-tale-requiem-carousel-thumb-1200x1600-4a718450aabc.jpeg",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price": 1000,
            "nameAlias": "a-plague-tale-requiem"
        },
        {
            "id": 7,
            "name": "A Plague Tale: Requiem 2",
            "imageUrl": "/images/sliderItem/egs-a-plague-tale-requiem-carousel-desktop-1248x702-25022231be7c.jpeg",
            "thumbnailUrl": "/images/thumbnail/egs-a-plague-tale-requiem-carousel-thumb-1200x1600-4a718450aabc.jpeg",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price": 1000,
            "nameAlias": "a-plague-tale-requiem-2"
        },
        {
            "id": 8,
            "name": "A Plague Tale: Requiem 2",
            "imageUrl": "/images/sliderItem/egs-a-plague-tale-requiem-carousel-desktop-1248x702-25022231be7c.jpeg",
            "thumbnailUrl": "/images/thumbnail/egs-a-plague-tale-requiem-carousel-thumb-1200x1600-4a718450aabc.jpeg",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "price": 1000,
            "nameAlias": "a-plague-tale-requiem-2"
        },
        // {
        //     "id": 9,
        //     "name": "A Plague Tale: Requiem 2",
        //     "imageUrl": "/images/sliderItem/egs-a-plague-tale-requiem-carousel-desktop-1248x702-25022231be7c.jpeg",
        //     "thumbnailUrl": "/images/thumbnail/egs-a-plague-tale-requiem-carousel-thumb-1200x1600-4a718450aabc.jpeg",
        //     "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        //     "price": 1000,
        //     "nameAlias": "a-plague-tale-requiem-2"
        // },
        // {
        //     "id": 10,
        //     "name": "A Plague Tale: Requiem 2",
        //     "imageUrl": "/images/sliderItem/egs-a-plague-tale-requiem-carousel-desktop-1248x702-25022231be7c.jpeg",
        //     "thumbnailUrl": "/images/thumbnail/egs-a-plague-tale-requiem-carousel-thumb-1200x1600-4a718450aabc.jpeg",
        //     "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        //     "price": 1000,
        //     "nameAlias": "a-plague-tale-requiem-2"
        // },

    ]

    return <>
        <div className='bp-1:mx-[5%] mx-[12%]'>
            <CarouselBanner listItems={games.slice(0, 6)} />
            <Center height='30px'>
            </Center>
            <CarouselBar listItems={games} title='Games On Sale' />
            <Center height='30px'>
            </Center>
        </div>
    </>
}



export default Discover
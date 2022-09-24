
import { FC, DOMAttributes } from 'react'
import NavBar from '../components/NavBar'
import { InputLeftElement, InputGroup, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Head from 'next/head'

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {

    const navItems = [
        { "name": "Discover", "url": "/discover" },
        { "name": "Browse", "url": "/browse" },
        { "name": "News", "url": "/news" },

    ]
    return <>
        <header className='bp-1:mx-[5%] py-10 mx-[10%] flex flex-row'>
            <div>
                <InputGroup>
                    <InputLeftElement children={<SearchIcon />} />
                    <Input className='rounded-lg'/>
                </InputGroup>
            </div>
            <div className='my-auto'>
                <NavBar highLightItemStyle={"hight-light-color"} navItems={navItems} />

            </div>
        </header>
    </>
}



export default Header
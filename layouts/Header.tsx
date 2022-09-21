
import { FC, DOMAttributes } from 'react'
import NavBar from '../components/NavBar'
import { InputLeftElement, InputGroup } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
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
        {/* <header>
            <NavBar highLightItemStyle={"hight-light-color"} navItems={navItems} />

        </header> */}
    </>
}



export default Header
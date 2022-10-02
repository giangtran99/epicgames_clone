
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
        <header style={{padding:"20px 0"}} className='bp-1:mx-[5%] mx-[10%] flex flex-row'>
            <div>
                <InputGroup>
                    <InputLeftElement children={<SearchIcon />} />
                    <Input sx={{
                        // "backgroundColor":"gray.50",
                        // "opacity":"0.1",
                        "borderRadius":"20px",
                        // "placeHoder":"white"
                    }} 
                    placeholder="Search store"
                    />
                </InputGroup>
            </div>
            <div className='my-auto'>
                <NavBar highLightItemStyle={"hight-light-color"} navItems={navItems} />

            </div>
        </header>
    </>
}



export default Header
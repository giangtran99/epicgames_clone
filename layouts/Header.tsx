
import { FC } from 'react'
import Input from '../components/Input'
import { InputLeftElement, InputGroup } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {

    const navItems = [
        { "name": "Discover", "url": "/discover" },
        { "name": "Browse", "url": "/browse" },
        { "name": "News", "url": "/news" },

    ]
    return <>
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<PhoneIcon color='gray.300' />}
            />
            <Input type='tel' placeholder='Phone number' />
        </InputGroup>

    </>
}



export default Header
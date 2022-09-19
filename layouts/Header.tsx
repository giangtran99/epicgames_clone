
import { FC ,DOMAttributes } from 'react'
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
        <Input onPressEnter={(value)=>{
            console.log("@@my enter",value)
        }} prefixIcon={<PhoneIcon />}/>
    </>
}



export default Header
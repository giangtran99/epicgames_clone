import { FC, useRef } from 'react'
import { Input as ChakraInput , InputProps as ChakraInputProps} from '@chakra-ui/react'




interface InputProps extends ChakraInputProps{

    
}


const Input: FC<InputProps> = ({...props}) => {
    const inputRef = useRef() as any

    console.log("@@props",props)
    return <>
        <ChakraInput {...props}/>
    </>
}


export default Input
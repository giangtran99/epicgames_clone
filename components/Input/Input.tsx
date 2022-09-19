import { FC, useRef, ReactNode, KeyboardEvent, useEffect, InputHTMLAttributes } from 'react'
import { InputProps as ChakraInputProps, Input as ChakraInput, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

interface InputProps extends ChakraInputProps {
    prefixIcon?: ReactNode,
    suffixIcon?: ReactNode,
    onPressEnter?(value: string | number): void

}



const Input: FC<InputProps> = (({ prefixIcon, suffixIcon, onPressEnter, ...props }) => {
    const inputRef = useRef() as any

    const handleEnterInput = () => {
        inputRef.current.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === "Enter" && onPressEnter) onPressEnter(inputRef.current.value)
        })
    }
    useEffect(() => {
        if (inputRef.current) {
            console.log("@@call")
            handleEnterInput()
        }
    }, [inputRef.current])

    return <>
        <InputGroup>
            {prefixIcon && <InputLeftElement
                pointerEvents='none'
                children={prefixIcon}
            />}
            <ChakraInput {...props} ref={inputRef} />

            {suffixIcon && <InputRightElement
                pointerEvents='none'
                children={suffixIcon}
            />}
        </InputGroup>
    </>
})


export default Input
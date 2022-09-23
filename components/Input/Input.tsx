import { ReactNode, KeyboardEvent } from 'react'
import { forwardRef, InputProps as ChakraInputProps, Input as ChakraInput, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
interface InputProps extends ChakraInputProps {
    onPressEnter?(value?: string | number): void

}


const Input = forwardRef<InputProps, 'input'>(({ onPressEnter, ...restProps }, ref: any) => {

    // const inputRef = useRef(null)
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (onPressEnter && e.key === 'Enter') {
            onPressEnter(ref.current?.value)
            if (ref.current?.value) ref.current.value = ""
        }
    };

    // console.log("@@ref",ref?.current?.value)
    return <>
        <div>
            <ChakraInput onKeyDown={handleKeyDown} {...restProps} ref={ref} />
        </div>

    </>
})


export default Input
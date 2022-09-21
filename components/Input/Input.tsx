import { ReactNode, KeyboardEvent } from 'react'
import { forwardRef, InputProps as ChakraInputProps, Input as ChakraInput, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
interface InputProps extends ChakraInputProps {
    prefixIcon?: ReactNode,
    suffixIcon?: ReactNode,
    onPressEnter?(value?: string | number): void

}


const Input = forwardRef<InputProps, 'input'>(({ prefixIcon, suffixIcon, onPressEnter, ...restProps }, ref: any) => {

    // const inputRef = useRef(null)
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (onPressEnter && e.key === 'Enter') {
            onPressEnter(ref.current?.value)
            if (ref.current?.value) ref.current.value = ""
        }
    };

    // console.log("@@ref",ref?.current?.value)
    return <>
        <div >
            <InputGroup>
                {prefixIcon && <InputLeftElement
                    pointerEvents='none'
                    children={prefixIcon}
                />}
                <ChakraInput onKeyDown={handleKeyDown} {...restProps} ref={ref} />
                {suffixIcon && <InputRightElement
                    pointerEvents='none'
                    children={suffixIcon}
                />}
            </InputGroup>
        </div>

    </>
})


export default Input
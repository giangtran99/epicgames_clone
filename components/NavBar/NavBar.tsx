
import { FC } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'



interface NavItemType {
    name: string,
    url: string
}

interface NavBarProps {
    navItems: NavItemType[],
    highLightItemStyle: "under-line" | 'hight-light-color'

}

const NavBar: FC<NavBarProps> = ({ navItems, highLightItemStyle, ...props }) => {
    const router = useRouter();


    const currentNavItemStyles = (styleOption: string, isHightLight: boolean) => {
        switch (styleOption) {
            case "under-line":
                return isHightLight ? "border-b-4 border-indigo-500" : ""
            case "hight-light-color":
                return isHightLight ? "text-white" : "text-gray-400"
            default:
                return
        }
    }
    return <>
        <ul {...props} className='list-none text-base flex'>
            {navItems.map((item: NavItemType, index: number) => {
                return <li key={index} className={`ml-8 hover:${currentNavItemStyles(highLightItemStyle, true)} ${currentNavItemStyles(highLightItemStyle, item.url === router.pathname)}`}>
                    <Link href={item.url}>
                        <p className=''>{item.name}</p>
                    </Link>
                </li>
            })}
        </ul>

    </>
}



export default NavBar
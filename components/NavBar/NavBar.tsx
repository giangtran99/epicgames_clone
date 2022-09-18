
import {FC} from 'react'
import {useRouter} from "next/router";
import Link from 'next/link'


interface NavItemType {
    name:string,
    url:string
}

interface NavBarProps{
    navItems:NavItemType[]
    
}

const NavBar : FC<NavBarProps> = ({navItems,...props})=>{
    const router = useRouter();

    console.log("@@router",router)
   
    const currentNavItemColor = (navItem:NavItemType) =>{
        return navItem.url === router.pathname ? "text-white":"text-gray-400"
    }
    return <>
        <ul {...props} className='list-none text-base flex '>
            {navItems.map((item:NavItemType,index:number)=>{
                return <li key={index} className={`ml-8 hover:text-white ${currentNavItemColor(item)}`}>
                    <Link href={item.url}>{item.name}</Link>
                </li>
            })}
        </ul>
    
    </>
}



export default NavBar
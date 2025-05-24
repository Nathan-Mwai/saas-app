"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems = [
    {Label: 'Home', href:'/'},
    {Label: 'Companions', href:'/companions'},
    {Label: 'My Journey', href:'/my-journey'},
]

const NavItems = () => {
    const pathname = usePathname()
    return (
        <nav className={'flex items-center gap-4'}>
            {navItems.map(({Label, href}) => (
                <Link
                    href={href}
                    key={Label}
                    className={cn(pathname === href && 'text-primary font-semibold')}>{Label}</Link>
            ))}
        </nav>
    )
}
export default NavItems

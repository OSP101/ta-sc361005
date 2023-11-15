import './globals.css'
import type { Metadata } from 'next'
import React from 'react';
import { Inter } from 'next/font/google'
import Providers from './providers'
import ThemeSwitcher from './components/ThemeSwitcher'
import {Button,Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent,User, ButtonGroup} from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react"



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Score - SC361005',
  description: 'SC361005/2566 Introduction to Computer Organization and Architecture'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

const { data: session } = useSession()

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <header className='py-6'>    
            <Navbar maxWidth='2xl'>
            <NavbarBrand>
            <ul>
                <li>
                  <Link href='/' color="secondary" size="lg">SC361005 ComArc</Link>
                </li>
              </ul>
            </NavbarBrand>


      <Popover showArrow placement="bottom">
      <PopoverTrigger>
        {/* <User   
          as="button"
          name="Zoe Lang"
          description="Product Designer"
          className="transition-transform"
          avatarProps={{
            color:"danger" ,src:`${session?.user?.image}`
          }}
        /> */}
      </PopoverTrigger>
      <PopoverContent className="p-1">
      <Button color="primary" variant="bordered">
        Bordered
      </Button> 
      </PopoverContent>
    </Popover>

              <ThemeSwitcher />
            </Navbar>
          </header>
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  )
}

import React from 'react'
import { Button, Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent,Avatar,User, ButtonGroup} from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react"


function Test() {
  // const { data: session } = useSession()
  // console.log(session?.user?.email)

  return (
    <div>
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <User   
          as="button"
          name="Zoe Lang"
          description="Product Designer"
          className="transition-transform"
          avatarProps={{
            color:"danger" ,src:"https://i.pravatar.cc/150?u=a04258114e29026708c"
          }}
        />
      </PopoverTrigger>
      <PopoverContent className="p-1">
      <Button color="primary" variant="bordered">
        Bordered
      </Button> 
      </PopoverContent>
    </Popover>

    
    </div>
  )
}

export default Test
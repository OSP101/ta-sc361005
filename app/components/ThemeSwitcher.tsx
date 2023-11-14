'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {Switch} from "@nextui-org/react";
import { Button } from '@nextui-org/button'
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";
export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [swittheme, setSeittheme] = useState()
  const [isSelected, setSelected] = useState(true)

  useEffect(() => {
    setMounted(true)
    if(theme == 'light'){
      setSelected(true)
      console.log("Light")
      
    }else{
      setSelected(false)
      console.log("Dark")
      
    }
  }, [])

  if (!mounted) return null

  const swit = () =>{
    if(isSelected){
      setSelected(false)
      console.log("Dark")
      setTheme('dark')
    }else{
      setSelected(true)
      console.log("Light")
      setTheme('light')
    }
  } 


  return (
    <div className='flex gap-4'>
      <Switch
      size="lg"
      onClick={swit}
      color="secondary"
      thumbIcon={({className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >
    </Switch>
    </div>
  )
}

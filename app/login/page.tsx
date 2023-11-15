"use client"
import style from '../Login.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { HiAtSymbol, HiLockClosed, HiEyeOff, HiEye,HiOutlineLogout} from "react-icons/hi";
import { signIn, signOut } from "next-auth/react";
import Head from 'next/head';


export default function Login() {

    const [show, setShow] = useState(false)

      async function handleGoogleSignin(){
        signIn('google',{callbackUrl:"http://localhost:3000"})
      }

      console.log("Google"+process.env.GOOGLE_ID)
  return (
    <div className='container'>
        <div className="input-button">
            <button type="button" className={style.button_custom} onClick={handleGoogleSignin}>Sign in with Google <Image src='/Google__G__Logo.svg' alt='' width="20" height={20}></Image></button>
        </div>
</div>
  )
}
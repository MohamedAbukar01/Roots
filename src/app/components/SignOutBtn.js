import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'


function SignOutBtn() {
    const {data: session , status} = useSession()

    if (status === 'authenticated') {
        return <button className="text-sm" onClick={()=>{signOut()}}>SIGN OUT</button>
    }
    
  return (
    <div>
        <Link href={"/signup"} className="text-sm">SIGN UP</Link>
    </div>
  )
}

export default SignOutBtn
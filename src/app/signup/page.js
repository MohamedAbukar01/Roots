"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function page() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('api/users/signup', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({username,password,email})
      })

      if(!response) {
        throw new Error('Failed to sign up')
      }

      console.log('user signed up successfully')
      setError('Sign up successful')
      router.push('/login')
      
    } catch (error) {
      console.log('Failed to sign up' + error)
    }
  }
  return (
    <div className='flex flex-col justify-center items-center mt-8 px-6'>
      <div className='w-[800px] h-[500px] flex flex-col md:flex-row md:shadow-lg rounded px-6'>
        <div className='w-full h-full flex flex-col justify-center items-center '>
          <div className='flex flex-col justify-between items-center gap-1 '>
            <h3 className='font-bold text-xl '>ROOTS</h3>
            <p className='text-base'>Please enter your details</p>
          </div>
          <form onSubmit={handSubmit} className='flex flex-col justify-center items-start gap-2 mt-5 px-6'>
            <label>
              <p className='text-base'>Username</p>
              <input className='w-[300px] border-b rounded outline-none' type='username' name='username' onChange={(e)=> {setUsername(e.target.value)}} />
            </label>
            <label>
              <p className='text-base'>Email</p>
              <input className='w-[300px] border-b rounded outline-none' type='email' name='email' onChange={(e)=> {setEmail(e.target.value)}} />
            </label>
            <label>
              <p className='text-base'>Password</p>
              <input className='w-[300px] border-b rounded outline-none' type='password' name='password' onChange={(e)=> {setPassword(e.target.value)}} />
            </label>
            <label>
              <div className='flex flex-row justify-between items-center gap-1 '>
                <input type='checkbox' name='checkbox' />
                <p className='text-sm mr-12'>Remeber me</p>
                <p className='text-sm font-bold hover:underline'>Forgotten Password?</p>
              </div>
            </label>
            <div className='w-full flex flex-col justify-center items-center gap-2 mt-8'>
              <button type='submit' className='w-[300px] border px-20 py-2 rounded-full hover:shadow-lg bg-black text-white text-base'>Sign Up</button>
              <p className='text-base '>Dont have an account ? <Link className=' font-bold text-base hover:underline' href={'/login'}>Login</Link> </p>
              {error && (<div>{error}</div>)}
            </div>
          </form>
        </div>
        {/* {Second Column} */}
        <div className=' border-l w-full h-full hidden md:flex flex-col justify-between items-center py-10 '>
          <div></div>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <h3 className='w-[250px] text-xl'>We are committed to sustainable practices...</h3>
            <p className='font-bold text-sm'>ROOTS</p>
          </div>
          <div className='flex flex-col justify-center items-center text-center w-[250px] gap-2 '>
            <p className='text-xs'>Follow us on <Link className='font-bold text-xs' href={'https://instagram.com'}>Instagram</Link> for grooming tips and exclusive content!</p>
            <p className='text-xs'>Have questions? <Link className='font-bold text-xs' href={"/"}>Contact customer support team</Link></p>
          </div>
        </div>

      </div>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="flex items-center justify-center mt-[100px]">
        <div className='w-[800px] h-[400px]'>
            <div className='border border-grey-300 bg-white py-6 px-8 h-full w-full'>
                <h3 className='text-2xl font-bold text-black'>Login</h3>
                <span className='text-black'>Please fille in your credentials</span>
                <form method='' className=''>
                    <label htmlFor="username" className='p-2 pb-4 text-black'>
                        <span className='font-semibold block mb-2'>username</span>
                        <input type="text" 
                          className='border border-grey-300 w-[60%] rounded-md'
                        />
                    </label>
                    <label htmlFor="password" className='p-2 mb-4 text-black'>
                        <span className='font-semibold block mb-2'>Password</span>
                        <input type="password" 
                          className='border border-grey-300 w-[60%] rounded-md py-2'
                        />
                    </label>
                    <button className='bg-blue-500 block my-4 text-white px-6 py-2 rounded-md'>Login</button>
                </form>
                <span className='text-black mt-4'>Don{`'`}t have an account? <Link href='#' className='text-blue-500'>Sign up now.</Link></span>
            </div>
        </div>
    </div>
  )
}

export default Login

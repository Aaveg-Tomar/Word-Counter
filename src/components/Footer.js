import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-gray-900 border-t-4 border-y-gray-500 mt-5 h-32'>
        <div className=' flex mt-5'>
            <img className=' w-12 ml-16 mt-3' src='/assests/word-file.png' alt='logo' />
            <h1 className=' text-xl font-bold ml-6 mt-4'>Word Counter</h1>
        </div>
        <p className=' flex justify-center text-lg text-gray-400'>&copy; Venom</p>

    </div>
  )
}


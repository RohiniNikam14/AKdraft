import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate()

  return (
    <div className='relative h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden'>

      {/* Gradient Blobs */}
      <div className='absolute w-72 h-72 bg-red-800 rounded-full blur-3xl opacity-30 top-10 left-10'></div>
      <div className='absolute w-72 h-72 bg-red-700 rounded-full blur-3xl opacity-30 bottom-10 right-10'></div>
      <div className='absolute w-60 h-60 bg-red-900 rounded-full blur-3xl opacity-20 top-1/2 left-1/3'></div>

      {/* Content */}
      <h1 className='text-5xl font-bold text-red-600 tracking-wide z-10'>
        Akatsuki's Draft
      </h1>

      <h3 className='text-xl text-gray-300 mt-4 italic z-10'>
        Share Stories, Shayari & Art
      </h3>

      <button
        onClick={() => navigate('/home')}
        className='mt-8 px-10 py-3 text-lg font-semibold text-white rounded-xl 
        bg-red-700 
        shadow-lg 
        hover:bg-red-600 hover:scale-105 
        transition-all duration-300 active:scale-95 z-10'>
        Enter Hub
      </button>

    </div>
  )
}

export default Landing
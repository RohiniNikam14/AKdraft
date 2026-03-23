//import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div
        className="flex flex-col h-screen w-full justify-center items-center p-20 text-center"
        style={{
          background: "radial-gradient(circle at center, black 40%, #7f1d1d 100%)"
        }}
      >
        <h1 className="text-4xl font-bold py-4 text-white px-5">
          Welcome to AkatSuki's Hub
        </h1>

        <h3 className="text-xl pt-2 text-white">
          Share Stories, Shayari & Art
        </h3>

        <button
          onClick={() => navigate("/home")}
          className="py-2 px-9 bg-red-700 text-black font-bold rounded-xl mt-3 active:scale-95"
        >
          Enter Hub
        </button>
      </div>
    </div>
  )
}

export default Landing

import React from "react"

function Home() {
  const myName = "Neil Adrian Balmes"
  const Profession = "Full-stack Developer"
  return (
    <div className="page h-screen w-full flex justify-center items-center">
      <div className="text-center p-5 select-none">
        <h2 className="text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl uppercase">
          {myName}
        </h2>
        <h3 className="text-xl py-2 dark:text-white md:text-3xl">
          {Profession}
        </h3>
        <p className="text-sm py-5 leading-5 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Developer providing services for  building (and occasionally designing) exceptional digital experiences.
        </p>
      </div>
    </div>
  )
}

export default Home

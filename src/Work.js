import React from 'react'
import workData from './data/work/projects.json'


const Work = () => {
  const data = workData.map((item, pos) => {
    console.log(pos)

    return (
      <div className="bg-project-bg-light border  border-cyan-600  rounded-lg shadow hover:shadow-work-hover-light dark:hover:shadow-work-hover-dark dark:bg-project-bg-dark dark:border-gray-700 transition-all" key={pos}>
        <a href={item.link} target="_blank">
          <img className="p-4 rounded-lg w-full" src={item.thumb} alt={item.name} />
          <div className="p-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            <a href={item.link} className='text-center' target="_blank">
              <button className="h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white" >
                Visit Website
              </button>
            </a>
          </div>
        </a>
      </div>
    )
  })

  return (
    <div className='pb-32 pt-32'>
      <h2 className="text-center text-3xl text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Projects</h2>
      <p className="text-sm py-5 text-center leading-snug leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-l">
        Collection of projects, from websites to webapps and everything tech. Includes experiments and self-discoveries.
      </p>

      <div className='grid  grid-cols-work-grid sm:grid-cols-work-grid-sm w-full gap-8'>
        {data}
      </div>
    </div>
  )
}

export default Work

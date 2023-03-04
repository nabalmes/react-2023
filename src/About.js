import Me from './assets/ME.webp'

import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiJquery, 
  SiTailwindcss, 
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNodedotjs,
  SiMaterialui,
  SiReact
} from "react-icons/si";


const About = () => {
  const MyName = "Neil Adrian C. Balmes"

  return (
    <div className='pb-24'>
      <div className="flex justify-center flex-wrap-reverse gap-4 mb-8">
        <div className='max-w-sm'>
          <h2 className="text-center text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl md:text-left">About Me</h2>
          <p className="text-md py-2 leading-snug leading-8 text-gray-800 dark:text-gray-200">
            Hello! I am <span className="text-teal-500"> {MyName} </span>I'm a Front-end Developer from the Philippines, Who want to be a Fullstack Developer
          </p>
          <p className="text-md py-2 leading-snug leading-8 text-gray-800 dark:text-gray-200">
            On a journey of non-stop learning new exciting things and keeping up with what's latest in tech.
          </p>
        </div>
        <img src={Me} alt="" className='max-w-sm' width={'90%'}/>
      </div>
      <div className='md:flex md:justify-center md:gap-4 md:flex-wrap'>
        <div className='bg-project-bg-light rounded-xl mb-5 p-4 dark:bg-project-bg-dark md:max-w-sm md:w-96'>
          <h4 className="text-center text-xl py-2 text-teal-600 mb-4 font-medium dark:text-teal-400 md:text-2xl">LANGUAGES</h4>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <div className='flex flex-col items-center'>
              <SiHtml5/>
              <p className='text-sm text-center mt-2'>HTML</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiCss3/>
              <p className='text-sm text-center mt-2'>CSS</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiJavascript/>
              <p className='text-sm mt-2'>Javascript</p>
            </div>
          </div>
        </div>
        <div className='bg-project-bg-light rounded-xl mb-5 p-4 dark:bg-project-bg-dark md:max-w-sm md:w-96'>
          <h4 className="text-center text-2xl py-2 text-teal-600 mb-4 font-medium dark:text-teal-400 md:text-2xl">LIBRARIES</h4>
          <div className='text-5xl flex justify-center gap-14 p-3 text-gray-600 dark:text-gray-400'>
            <div className='flex flex-col items-center'>
              <SiTailwindcss/>
              <p className='text-sm mt-2'>Tailwindcss</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiJquery/>
              <p className='text-sm mt-2'>jQuery</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiBootstrap/>  
              <p className='text-sm mt-2'>Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:flex md:justify-center'>
        <div className='bg-project-bg-light rounded-xl mb-5 md:p-11 dark:bg-project-bg-dark'>
          <h4 className="text-center text-2xl py-2 text-teal-600 mb-4 font-medium dark:text-teal-400 md:text-2xl">IN PROGRESS</h4>
          <div className='text-4xl flex flex-wrap justify-center gap-14 py-3 md:px-16 text-gray-600  dark:text-gray-400'>
            <div className='flex flex-col items-center'>
              <SiMongodb/>
              <p className='text-sm text-center mt-2'>mongoDB</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiExpress/>
              <p className='text-sm text-center mt-2'>Express</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiReact/>
              <p className='text-sm mt-2'>React</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiNodedotjs/>
              <p className='text-sm mt-2'>Node.js</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiRedux/>
              <p className='text-sm mt-2'>Redux</p>
            </div>
            <div className='flex flex-col items-center'>
              <SiMaterialui/>
              <p className='text-sm mt-2'>MaterialUI</p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:max-w-full md:flex md:justify-center'>
        <div className='bg-project-bg-light rounded-xl mb-5 p-4 dark:bg-project-bg-dark'>
          <div className="md:px-36 flex justify-center flex-wrap-reverse gap-4 ">
            <div className='max-w-sm text-center md:min-w-max'>
              <p className="text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                <span className="text-teal-500">WHAT'S NEXT?</span>
              </p>
              <h2 className="text-center text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Get in Touch</h2>
              <p className="text-center mb-5 text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Wanna work together for something great or just wanna say hello?
              </p>
              <div className='text-center'>
                <a href='https://mail.google.com/mail/u/?authuser=lemvee11@gmail.com' className='text-center'>
                  <button className="h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white" >
                    Say Hi!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

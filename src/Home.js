
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
} from "react-icons/ai";

function Home() {
  const myName = "Neil Adrian Balmes"
  const Profession = "Front-end Developer"
  return (
    <div className="text-center p-5 "> 
      <h2 className="text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl uppercase">
       {myName}
      </h2>
      <h3 className="text-xl py-2 dark:text-white md:text-3xl">
        {Profession}
      </h3>
      <p className="text-sm py-5 leading-5 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Developer providing services for  building (and occasionally designing) exceptional digital experiences.
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a href="https://github.com/nabalmes" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/adrian-balmes-64990a258/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://medium.com/@neilbalmes4200" target="_blank">
          <AiFillMediumSquare/>
        </a>
      </div>
    </div>
  )
}

export default Home

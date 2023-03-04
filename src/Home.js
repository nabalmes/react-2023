
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

function Home() {
  return (
    <div className="text-center p-5 "> 
      <h2 className="text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl ">
        Neil Adrian Balmes
      </h2>
      <h3 className="text-xl py-2 dark:text-white md:text-3xl">
        Front-end Developer.
      </h3>
      <p className="text-sm py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Developer providing services for  building (and occasionally designing) exceptional digital experiences.
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a href="https://github.com/VeejayAdolf-Lemita" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/veejay-adolf-lemita-b572b217b/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://web.facebook.com/veejay.lemita.75/" target="_blank">
          <AiFillFacebook/>
        </a>
      </div>
    </div>
  )
}

export default Home

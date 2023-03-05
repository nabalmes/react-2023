import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Logo from './assets/NAB-logo-dark.svg'
import Nav from './nav/Nav'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import Work from './Work'
import CV from './assets/NAB-resume.pdf'


function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <Router>
      <div className={darkMode ? "dark" : ""}  >
        <main className="bg-light bg-light-image px-4 dark:bg-dark  dark:bg-dark-image">
          <section className="min-h-screen flex flex-col justify-center">
            <header className="bg-nav-dark dark:bg-nav-light backdrop-blur fixed inset-0 h-16 w-full px-8 flex items-center   justify-between dark:text-white">
              <Link to='/' className="cursor-pointer">
                <img className="dark:invert" src={Logo} width="60px" />
              </Link>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" />
                </li>
                <li>
                  <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" href={CV} download>
                    Resume
                  </a>
                </li>
              </ul>
            </header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
            </Routes>
            <Nav />
          </section>
          <button className="bg-nav-light text-light dark:text-dark dark:bg-nav-dark scroll-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
          </button>
        </main>
      </div>
    </Router>
  );
}

export default App;

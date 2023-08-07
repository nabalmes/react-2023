import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import Logo from './assets/NAB-logo-dark.svg'
import LogoLight from  './assets/NAB-logo-light.svg'
import Nav from './nav/Nav'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import Work from './Work'



function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'false'
  );

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem('darkMode', String(newDarkMode));
      return newDarkMode;
    });
  };

  useEffect(() => {
    // Get the darkMode value from localStorage and update the state.
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}  >
        <main className="bg-light bg-light-image dark:bg-dark  dark:bg-dark-image">
          <header className="bg-nav-dark dark:bg-nav-light border-b border-[#877d7d21] dark:border-[#332f2f00] backdrop-blur fixed inset-0 h-16 w-full px-8 flex items-center justify-between dark:text-white z-10">
            <Link to='/' className="cursor-pointer select-none">
              <img src={Logo} width="80px" alt="mylogo"  style={{display: darkMode ? "none" : "block"}}/>
              <img src={LogoLight} width="80px" alt="mylogo"  style={{display: darkMode ? "block" : "none"}}/>
            </Link>
            <ul className="flex items-center">
              <li onClick={() => handleDarkModeToggle(!darkMode)} className='mode-logo__cont'>
                <BsMoon style={{display: darkMode ? "none" : "block"}}  className=" cursor-pointer text-2xl" />
                <BsSun style={{display: darkMode ? "block" : "none"}}  className=" cursor-pointer text-2xl" />
              </li>
            </ul>
          </header>
          <section className="min-h-screen flex flex-col justify-center px-4 ">

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

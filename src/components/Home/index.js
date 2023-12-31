import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ','V', 'i', 'n', 'a', 'y', 'a', 'k']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
  const timeoutId = setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000);

  return () => {
    clearTimeout(timeoutId); // Clear the timeout when the component unmounts
  };
}, []);

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / Software Developer / Poet</h2>
                
                <Link to="/contact" className="flat-button">
                CONTACT ME
                </Link>
                
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default Home
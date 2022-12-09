import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setletterClass] = useState('text-animate')
    const nameArray = ['I','m','a','n','i' ]
    const jobArray = ['c', 'o', 'm', 'p', 'u', 't', 'e', 'r', 's', 'c', 'i', 'e', 'n', 't', 'i', 's', 't']

    useEffect(() => {
        return setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 4000)
    }, [])
        
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`$letterClass} _12`}>i,</span>
                <br/> 
                <span className={`${letterClass} _12`}>I</span>
                <span className={`${letterClass} _12`}>m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Insert what i do.. i.e specialties</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home  
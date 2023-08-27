import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import {Link} from 'react-scroll';
import {MdDarkMode,MdLightMode} from 'react-icons/md'

const Nav = ({toggleDarkMode,darkMode}) => {

  return (
    <header className='padding-x py-8 absolute z-10 w-full dark:bg-gray-700'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                src={headerLogo}
                alt="Logo"
                width={130}
                height={29} 
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {
                    navLinks.map((item)=>(
                        <li key={item.label} className='transition-colors duration-300'>
                            <Link 
                            activeClass="active-menu" 
                            to={item.href.replace('#','')} 
                            spy={true} 
                            hashSpy={true} 
                            smooth={true} 
                            offset={-10} 
                            duration={700}
                            className='font-montserrat leading-normal text-lg text-slate-gray dark:text-white cursor-pointer hover:border-b-coral-red hover:border-b-2 border-spacing-4'
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className='max-lg:block hidden'>
                <img src={hamburger} width={25} height={25} alt="" />
            </div>
            <div className='flex justify-center items-center mr-10'>
                <button id="toggleDark" className='text-2xl dark:text-white' onClick={toggleDarkMode}>{!darkMode? <MdDarkMode/> :<MdLightMode/>}</button>
            </div>
            <div className='max-sm:hidden flex justify-center items-center'>
                <button className='border-coral-red border-2 py-2 px-6 text-dark font-montserrat font-bold dark:text-white' >SignUp</button>
                <button  className='bg-coral-red border-coral-red border-2 py-2 px-6 text-white font-montserrat font-bold'>SignIn</button>
            </div>
        </nav>
        
    </header>

  )
}

export default Nav
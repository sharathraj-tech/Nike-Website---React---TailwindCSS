import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import Button from './Button';
import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
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
                            className='font-montserrat leading-normal text-lg text-slate-gray cursor-pointer hover:border-b-coral-red hover:border-b-2 border-spacing-4'
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
            <div className='max-sm:hidden'>
                <Button label="Signup" paddingX='px-6' paddingY='py-4' />
            </div>
        </nav>
    </header>
  )
}

export default Nav
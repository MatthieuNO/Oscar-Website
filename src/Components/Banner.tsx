import Logo from '../Assets/logo.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Banner () {

    function ScrollButton() {
        return (
          <div>
            <Link to="section-to-scroll-to" smooth={true} duration={500}>
            <NavLink to='/' className='banner-btn'>History</NavLink>
            </Link>
          </div>
        );
      };

    return (
        <header>
            <NavLink to='/' ><img src={Logo} alt="Logo" /></NavLink>   
               <ul className='list-btn'>
                <li>
                  <ScrollButton/>                           
                </li>
                <li>
                    <NavLink to='/winners' className='banner-btn' >Winners</NavLink>
                </li>
                <li>
                    <NavLink to='/About' className='banner-btn'>About</NavLink>
                </li>
            </ul>
        </header>
    );
};

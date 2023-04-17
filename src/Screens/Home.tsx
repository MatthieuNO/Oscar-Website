import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Oscar from '../Assets/oscar.png'
import History from '../Components/History'

import { NavLink } from 'react-router-dom';

 
export default function Home () {
    return (
        <>
        <Banner/>
        <main>
            <section className='contenue'>
                <div className='description'>
                    <h1>The Oscar</h1>
                        <p>      
                            Welcome to our website dedicated to the Oscars, one of the most prestigious award ceremonies in the world of entertainment. 
                            The Oscars, also known as the Academy Awards, celebrate the best achievements in film, 
                            recognizing outstanding performances, directing, writing, and more.
                        </p>
                        <button className='winner-btn'>
                            <NavLink to='/winners'  >Winners</NavLink>
                        </button>              
                </div>
                <img src={ Oscar} alt="Oscar" />
            </section>
            <History/>
            <Footer/>
        </main>
        </>
    );
};
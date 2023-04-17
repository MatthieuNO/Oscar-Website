import Banner from '../Components/Banner';
import Footer from '../Components/Footer';

import iconeoscar from  '../Assets/OscarIcone.png'
import AfficheEEOAO from '../Assets/Affiche-EEAAO.jpeg'
import AfficheAQOTWF from '../Assets/Affiche-AQOTWF.jpeg'
import AfficheTheWhale from '../Assets/Affiche-TheWhale.jpeg'
import AffichePinocchio from '../Assets/Affiche-Pinocchio.jpeg'


export default function Winners () {
    return (
        <>
        <header>
            <Banner/>
        </header>
            <main>
                <h1>Winners</h1>
                <h3>of 95th Academy Award</h3>
                  <section className='list-movie'>
                    <div className='card-winners'>
                        <img src={AfficheEEOAO} alt="affiche film" />
                            <ul>
                                <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Picture</li>
                                <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Director</li>
                                <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Actress</li>
                                <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Support Actor</li>
                                <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Supporting Actress</li>
                                <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Original Screenplay</li>
                                <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Film Editing</li>
                            </ul>
                        </div>
                    <div className='card-winners'>
                        <img src={AfficheAQOTWF} alt="affiche film" />
                        <ul>
                            <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best International Feature Film</li>
                            <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Original Score</li>
                            <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Product Design</li>
                            <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Cinematography</li>
                        </ul>
                    </div>
                    <div className='card-winners'>
                     <img src={AfficheTheWhale} alt="affiche film" />
                     <ul>
                        <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Actor</li>
                        <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Makeup</li>
                     </ul>
                    </div>
                    <div className='card-winners'>
                        <img src={AffichePinocchio} alt="affiche film" />
                        <ul>
                            <li><img src={iconeoscar} alt="icone" className='iconeoscar' />Best Animated Feature Film</li>
                        </ul>
                    </div>
                </section>
            <Footer/>      
            </main>
        </>
    );
};
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';

export default function About () {
    return (
        <main>
            <Banner/>
            <section>
                <div className='about-section'>
                    <h2>ABOUT</h2>
                    <p>With our membership of over 10,000 global film industry artists and leaders, our acclaimed film museum and collection, and our world-renowned awards, the Academy of Motion Picture Arts and Sciences is the home of an expertise that is unparalleled.</p>
                    <p>We recognize and celebrate all aspects of the film industry, the entertainment it provides, and the diverse, talented people who make movies.</p>
                    <p>We connect our global audiences – Academy Members, the film industry, and film fans – through their shared passions for making and watching films.</p>
                    <p>We lead honest and relevant conversations and initiatives about cinema's past, present, and future.</p>
                    <p>We inspire people's passion for -- and interest in -- movies, moviemaking, and being a part of the film industry.</p>
                </div>
            </section>
            <Footer/>
        </main>
    );
};
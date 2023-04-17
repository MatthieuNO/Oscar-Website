import HistoryImage1 from '../Assets/history-image1.jpeg';
import HistoryImage2 from '../Assets/history-image2.jpeg';


export default function History  () {
    return ( 
        <main>           
            <h1 id="section-to-scroll-to">History</h1>

            <div className="history-grid">
                <div>
                    <img className='imagehistory1' src={HistoryImage1} alt="" />
                </div>
                <div>
                    <p className='paragraphe1'>
                    The Oscars, also known as the Academy Awards,
                        were created in 1929 to honor outstanding film achievements of the year.
                        The first Academy Awards took place on May 16, 1929 at the Roosevelt Hotel in Hollywood, California. Since then, the Oscars have become one of the most prestigious awards in the film industry.
                    </p>
                </div>
                <div>
                    <p className='paragraphe2'>
                    The Oscars were created by the Academy of Motion Picture Arts and Sciences,
                        an organization founded in 1927 to promote excellence in the motion picture industry.
                        The first Oscars were awarded in 12 categories, including Best Actor, Best Actress, Best Director and Best Picture.
                    </p>
                </div>
                <div>
                    <img className='imagehistory2' src={HistoryImage2} alt="" />
                </div>
            </div>
            
        </main>
    );
};
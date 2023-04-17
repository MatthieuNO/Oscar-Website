import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'



export default function Footer() {
    return (
    <footer>
        <ul>
        <h2>Contact us:</h2>
            <li>
                <a href="https://twitter.com" title="Twitter" >
                <FontAwesomeIcon icon={faTwitter}/>  
                </a>
            </li>
            <li>
                <a href="https://facebook.com" title="Facebook">
                <FontAwesomeIcon icon={faFacebook}/> 
                </a>
            </li>
            <li>
                <a href="https://instagram.com" title="Instagram">
                <FontAwesomeIcon icon={faInstagram}/> 
                </a>
            </li>
        </ul>
    </footer>
    );
};
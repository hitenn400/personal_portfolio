import './Footer.css';
import {AiFillFacebook,AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai'
const Footer=()=>{
    return(
        <>
            <footer>
                <a href='#' className='footer__logo'>HITEN</a>
                <ul className='permalinks'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#testimonial'>Testimonial</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <div className='footer__socials'>
                    <a href='https://facebook.com'><AiFillFacebook/></a>
                    <a href='https://instagram.com'><AiFillInstagram/></a>
                    <a href='https://twitter.com'><AiOutlineTwitter/></a>
                </div>
            </footer>
        </>
        );
}
export default Footer;
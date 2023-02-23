import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import './Header.css'
const HeaderSocials=()=>{
    return(
        <div className= 'header__socials'>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://githubcom" target="_blank"><FaGithub/></a>
            <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
        </div>

    )
}
export default HeaderSocials;
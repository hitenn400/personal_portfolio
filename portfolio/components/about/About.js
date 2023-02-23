import  './About.css';
import ME from '../../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';
import{AiFillFolder} from 'react-icons/ai';
const About=()=>{
    let data = [{icon:<FaAward/>,name:"Project", des:"2 Projects"}, {icon:<FaUserAlt/>,name:"Clients", des:"XYZ Client"}, {icon:<AiFillFolder/>,name:"Expereince", des:"6 Months"}, ]
    return(
    <>
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me_img'>
                        <img src={ME} alt="About-Image"></img>
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_content_cards'>
                       
                        {
                            data.map(d => {
                                return (
                                    <article className='about__card'>
                                    {d.icon}
                                    <h5>{d.name}</h5>
                                    <small>{d.des}</small>
                                </article>
                                )
                            })
                        }



                        {/* <article className='about__card'>
                            <FaUserAlt></FaUserAlt>
                            <h5>Clients</h5>
                            <small>200+ Clients Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <AiFillFolder></AiFillFolder>
                            <h5>Projects</h5>
                            <small>80 Projects Completed</small>
                        </article> */}
                    </div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         At non libero cupiditate voluptates quidem qui ea in velit,
                         laudantium nemo provident vitae alias? Mollitia id eos nisi autem sunt, 
                         dicta voluptatum? Consequuntur, adipisci id.
                    </p>
                    <a href="#contact" className='btn btn-primary'> Lets Talk</a>
                    

                </div>
            </div>

        </section>

    </>
    );
}
export default About;
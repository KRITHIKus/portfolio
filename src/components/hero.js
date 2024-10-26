import Heroimg from '../assests/hero.png'
import { AiOutlineReddit,AiOutlineFacebook,AiOutlineLinkedin, } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
export default function Hero(){
const config={
    subtitle:" I'm a Web Developer",
    social:{
        reddit:'',//link
        fb:'',
        leet:'',
        linkedin:''
    }

}
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' >
      
      
        <div className='md:w-1/2 felx flex-col'>
            <h1 className=' text-yellow-100 text-4xl font-hero-font2' >Hi, <br/>I'm <span className='text-black font-hero-font2'> KrithiK</span>
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>

       

        <div className='flex py-7 '>
            <a href={config.social.reddit} className='pr-5 hover:text-white' ><AiOutlineReddit size={40}/> </a>
            <a href={config.social.fb} className='pr-5 hover:text-white' ><AiOutlineFacebook size={40}/> </a>
            <a href={config.social.linkedin}  className=' hover:text-white' ><AiOutlineLinkedin size={40}/> </a>
            <a href={config.social.leet}  className='pl-5 hover:text-white' >< SiLeetcode size={37}/> </a>
        </div>
       </div>
<img className='md:w-1/3' src={Heroimg}/>
    </section>
}


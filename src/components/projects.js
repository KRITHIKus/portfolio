import eweb from '../assests/ecommerce-websites.jpg'
import tic from '../assests/game.png'
import blog from '../assests/food-ecommerce.jpg'
export default function Projects(){


const config={
    
        project:[
            {
                image:eweb,
                desc:'A mini e-commerce website built with React on the frontend and a minimal backend using Node.js, Express, and MongoDB. ',
                
                link:'https://github.com/KRITHIKus/cartify.git'
            },
        
    
            {
                image:blog,
                desc:'',
                
                link:''
            },
       
    

            {
                image:tic,
                desc:'A classic Tic Tac Toe game built with JavaScript, HTML, and CSS. Simple engaging, and fun for quick play!',
                
                link:'https://github.com/KRITHIKus/tic-tac-toe.git'
            }
        
        ],
        maindesc:'My portfolio features a range of web projects, including a Tic Tac Toe game built with HTML, CSS, and JavaScript, and a mini e-commerce site using React, Node.js, Express, and MongoDB.',
maindesc2:'These projects showcase my skills in creating fun games and building interactive websites with both frontend and backend functionality.'
    }








    return <section className="flex flex-col py-20 px-10 justify-center bg-primary text-white" id='projects'>
        <div className="w-full" >
        <div className="flex flex-col px-10 py-5">
<h1 className='text-4xl border-b-4 border-secondary mb-3 w-[150px] font-bold'>Projects</h1>
<p className='font-hero-font2'>{config.maindesc}</p>
<p className='font-hero-font2'>{config.maindesc2}</p>
</div>
        
        </div>
        <div className="w-full "> 
        <div className='flex flex-col md:flex-row px-10   gap-8'>
{config.project.map((project)=>( 
    <a href={project.link}>
    <div className='relative ' >
    <img className='h-[200px] w-[500px]' src={project.image}/>
    <div className='project-des'>
    <p className='text-center  py-5 font-hero-font2 text-yellow-400' >{project.desc}</p>
    <div className='flex justify-center'>
    <a className='btn' target='blank' href={project.link}>View Project </a>
</div>
 </div> 
 </div>



    </a>
 ))}








</div>

        </div>
    </section>
}

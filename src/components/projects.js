import eweb from '../assests/ecommerce-websites.jpg'
import tic from '../assests/food-ecommerce.jpg'
import blog from '../assests/website-blog.jpg'
export default function Projects(){


const config={
    
        project:[
            {
                image:eweb,
                desc:'A description',
                
                link:''
            },
        
    
            {
                image:tic,
                desc:'A description',
                
                link:'https://github.com/KRITHIKus/tic-tac-toe.git'
            },
       
    

            {
                image:blog,
                desc:'A description',
                
                link:'https://github.com/KRITHIKus/cartify.git'
            }
        
        ],
        maindesc:'A project description'
}








    return <section className="flex flex-col py-20 px-10 justify-center bg-primary text-white" id='projects'>
        <div className="w-full" >
        <div className="flex flex-col px-10 py-5">
<h1 className='text-4xl border-b-4 border-secondary mb-3 w-[150px] font-bold'>Projects</h1>
<p>{config.maindesc}</p>
</div>
        
        </div>
        <div className="w-full "> 
        <div className='flex flex-col md:flex-row px-10   gap-8'>
{config.project.map((project)=>( 
    <a href={project.link}>
    <div className='relative ' >
    <img className='h-[200px] w-[500px]' src={project.image}/>
    <div className='project-des'>
    <p className='text-center  py-5'>{project.desc}</p>
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

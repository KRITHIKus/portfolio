import resumeimg from '../assests/resume.jpg'
export default function Resume(){

    const config={
        link:'/resume1.pdf' 
    }
    return <section className='flex flex-col md:flex-row bg-sec px-5' id='resume'>
    <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
        <img className='w-[300px]' src={resumeimg} alt="Resume preview" />
    </div>

    <div className='md:w-1/2 flex justify-center'> 
        <div className='flex flex-col justify-center text-white'>  
            <h1 className='text-4xl border-b-4 border-primary mb-3 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5'>
                You can view my resume 
                <a 
                    className='ml-2 px-3 py-2 bg-primary text-white rounded btn' 
                    href={config.link} 
                    download={config.link}
                > 
                    Download
                </a>
            </p>
        </div>
    </div>
</section>

}
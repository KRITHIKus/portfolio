import resumeimg from '../assests/resume.jpg'
export default function Resume(){

    const config={
        link:'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf' //link
    }
    return <section className='flex flex-col md:flex-row bg-sec px-5' id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end' >
            <img className='w-[300px]' src={resumeimg}/>
        </div>

        <div className='md:w-1/2 flex justify-center'> 
        <div className='flex flex-col justify-center text-white'>  
            <h1 className='text-4xl border-b-4 border-primary mb-3 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5'>You can view my resume<a className='btn' href={config.link}> Download</a></p>
            
            </div>
           


        </div>
    </section>
}
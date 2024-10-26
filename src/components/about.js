import Aboutimg from '../assests/about.png'
export default function About(){

    const config={
        line1:' Hi, I’m Krihtik. I’m a fresher looking for internship opportunities in web development.',
        line2:'    I enjoy learning new technologies and working on projects that challenge me. I’m particularly interested in both front-end and back-end development.',
        line3:'Bachelor of Computer Applications',
        line4:'BCA',
        college:'East point college of higher education',
        year:'3rd year',
        on:'Ongoing'
    }
    return <section className='flex flex-col md:flex-row bg-sec px-5 ' id='about'>
        <div className='md:col w-1/2 py-5'>
            <img src={Aboutimg}/>
        </div>

        <div className='md:col w-1/2 flex justify-center'> 
        <div className='flex flex-col justify-center text-white'>  
            <h1 className='text-4xl border-b-4 border-primary mb-3 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'> {config.line1}</p>
            <p className='pb-5'>{config.line2} </p>
            
            <h1 className='text-4xl border-b-4 border-primary mb-3 w-[170px] font-bold'>Education</h1>

            <p className='pb-5'>
  <strong>{config.line3} ({config.line4})</strong> <br/> {config.college}
  <br/> 
  <em>{config.year} {config.on}</em>
</p>

            </div>
           


        </div>
    </section>
}
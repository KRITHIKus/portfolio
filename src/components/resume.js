// import resumeimg from '../assests/resume.jpg'
// export default function Resume(){

//     const config={
//         link:'/resume1.pdf' 
//     }
//     return <section className='flex flex-col md:flex-row bg-sec px-5' id='resume'>
//     <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
//         <img className='w-[300px]' src={resumeimg} alt="Resume preview" />
//     </div>

//     <div className='md:w-1/2 flex justify-center'> 
//         <div className='flex flex-col justify-center text-white'>  
//             <h1 className='text-4xl border-b-4 border-primary mb-3 w-[140px] font-bold'>Resume</h1>
//             <p className='pb-5'>
//                 You can view my resume 
//                 <a 
//                     className='ml-2 px-3 py-2 bg-primary text-white rounded btn' 
//                     href={config.link} 
//                     download={config.link}
//                 > 
//                     Download
//                 </a>
//             </p>
//         </div>
//     </div>
// </section>

// }

import resumeimg from '../assests/resume.jpg';

export default function Resume() {
    const config = {
        link: '/resume1.pdf'
    };

    return (
        <section className="flex flex-col md:flex-row items-center bg-sec px-6 py-16" id="resume">
            {/* Left - Resume Image */}
            <div className="md:w-1/2 flex justify-center md:justify-start">
                <img 
                    className="w-[250px] md:w-[320px] rounded-lg shadow-lg"
                    src={resumeimg} 
                    alt="Resume Preview" 
                />
            </div>

            {/* Right - Resume Text & Download */}
            <div className="md:w-1/2 flex flex-col justify-center text-white text-center md:text-left mt-6 md:mt-0 px-4">
                <h1 className="text-3xl md:text-4xl border-b-4 border-primary w-fit font-bold mx-auto md:mx-0 mb-3">
                    Resume
                </h1>
                <p className="text-base md:text-lg font-hero-font2 mb-5">
                    Download my resume to explore my experience, projects, and skills.
                </p>

                {/* Download Button with Hover Effect */}
                <a 
                    className="px-5 py-2 w-[180px] md:w-[200px] bg-primary text-white rounded-md shadow-md 
                    font-semibold text-sm md:text-lg flex items-center justify-center mx-auto md:mx-0
                    transition-all duration-300 hover:bg-secondary hover:text-yellow-300 hover:scale-105"
                    href={config.link} 
                    download
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
}

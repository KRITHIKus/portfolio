export default function Contact(){
    const config={
        line1:"If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn!",
        email:'krithikus2004@gmail.com',
        ph:'8618570153'
    }
    return <section className='flex flex-col bg-primary px-5 py-32' id="contacts">

        <div className='flex flex-col items-center text-white'> 

            <h1 className='text-4xl text-white border-b-4 border-secondary  mb-3 w-[140px] font-bold'>Contact</h1>
            <p className='py-5'>{config.line1} </p>
            <p> <span className="py-2 font-bold" >Email: {config.email}</span> </p>
            <p> <span className="py-2 font-bold" >Phone: {config.ph}</span> </p>
            
            </div>
           


        
    </section>
}
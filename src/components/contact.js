import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons

export default function Contact() {
    const config = {
        line1: "Feel free to reach out via email or phone! Let's connect.",
        email: "krithikus2004@gmail.com",
        ph: "8618570153"
    };

    return (
        <section className="bg-primary  px-5 py-20 flex justify-center" id="contacts">
            <div className="bg-sec shadow-xl rounded-lg p-8 text-white max-w-lg w-full text-center">
                
                {/* Heading */}
                <h1 className="text-4xl font-hero-font2 border-b-4 border-primary inline-block mb-5 pb-2">
                    Contact
                </h1>

                {/* Contact Text */}
                <p className="text-lg tracking-wide mb-6">{config.line1}</p>

                {/* Email */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaEnvelope className="text-xl font-hero-font2 text-yellow-300" />
                    <a href={`mailto:${config.email}`} className="hover:text-yellow-300 transition">
                        {config.email}
                    </a>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-center gap-3">
                    <FaPhone className="text-xl font-hero-font2 text-yellow-300" />
                    <a href={`tel:${config.ph}`} className="hover:text-yellow-300 transition">
                        {config.ph}
                    </a>
                </div>
            </div>
        </section>
    );
}

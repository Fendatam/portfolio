import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
    const isDesktop = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="home"
            className=" md:flex md:justify-between md:items-center md:h-full gap-16 py-10 slo2"
        >
            {/* Img  */}
            <div className=" md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isDesktop ? (
                    <div
                     >
                        <img alt="profile" src="./assets/prof.png" className=" hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"/>
                </div>
                ) : (
                        <div>
                       <img alt="profile" src="./assets/prof.png" className=" hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"/>     
                </div>
                )}
            </div>
             {/* Main section */}
                <div className=" z-30 basis-2/5 mt-12 md:mt-32">
                    {/* Heading */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                    }}>
                        <p className=" text-6xl font-playfair z-10 text-center md:text-start">
                        Mohammed {""}
                        <span className="xs:relative text-blue xs:font-semibold z-20 ">
                            Jalal
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-md text-center md:text-start">
                        A Mechanical Engineer with expertise in frontend web development, I have extensive knowledge and experience in HTML, CSS, and JavaScript. I am also skilled in the use of popular frameworks and libraries such as Bootstrap, Tailwind, and React.js. With my strong technical background and experience in web development, I am confident in my ability to deliver high-quality and effective solutions to any project.
                    </p>
                </motion.div>

                {/* cal to Action */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <div className="flex xss:items-center xss:justify-center md:justify-start">

                    <AnchorLink
                        className="bg-gradient-rainblue text-deep-blue round-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                        >
                    Contact Me
                    </AnchorLink>
                    <AnchorLink
                        className=" rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                        >
                        <div className=" bg-deep-blue hover:text-blue transition duration-500 flex items-center justify-center font-playfair px-7 py-3">
                            Let's talk.
                        </div>
                    </AnchorLink>   
                        </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <SocialMediaIcons/>
                    </motion.div>
            </div>
            

        </section>
    )
};

export default Landing;

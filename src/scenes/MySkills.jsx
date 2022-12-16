import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";


const MySkills = () => {
    const isDesktop = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-2 pb-24 slo3">
            {/* hing & img */}
            <div className="md:flex md:justify-between md:gap-16 mt-32 items-center">
                <motion.div
                    className=" md:w-1/3 "
                initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                    }}>
                    <p className=" font-playfair font-semibold text-5xl mb-5 sm:mx-auto">
                        MY <span className="text-blue">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                </motion.div>
                <div className="mt-0 md:mt-0 sm:items-center sm:self-center">
                    {isDesktop ? (<div
                     >
                        <img alt="profile" src="./assets/bulb2.png" className=" hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[800px] md:max-w-[1000px]"/>
                    </div>) : (
                        <div>
                        <img alt="profile" src="./assets/bulb2.png" className=" hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"/>
                </div>)}
                </div>
                </div>
                {/* Skills */}
                <div className=" md:flex md:justify-between mt-0 gap-48">
                    {/* FrontEnd Web Dev */}
                    <motion.div
                      className=" md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                    }}>
                        <div className="relative mb-16">
                            <div className=" z-10 ">
                                <p className=" font-playfair font-semibold text-5xl">01</p>
                                <p className=" font-playfair font-semibold text-3xl">FrontEnd Web Dev</p>
                            </div>
                        <div className="w-1/2 md:w-3/4 h-24 bg-blue absolute right-0 top-0 z-[-1]" />
                        <p className="mt-5">Proficient at using HTML5, CSS3 and JavaScript. Familiar with the use of Angular Framework and React.js library. great knowledge of TypeScript and Node.js. Great at maintaing the responsive state of a website.</p>
                        </div>
                    </motion.div>
                                        {/* FrontEnd Web Dev */}
                    <motion.div
                      className=" md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                    }}>
                        <div className="relative mb-16">
                            <div className=" z-10 ">
                                <p className=" font-playfair font-semibold text-5xl">02</p>
                                <p className=" font-playfair font-semibold text-3xl">UX/UI Design</p>
                            </div>
                        <div className="w-1/2 md:w-3/4 h-24 bg-blue absolute right-0 top-0 z-[-1]" />
                        <p className="mt-5">Great at using UX/UI tools such as Figma and PS. Great at ensuring graphical consistency of products for better user experience</p>
                        </div>
                    </motion.div>
                                        {/* FrontEnd Web Dev */}
                    <motion.div
                      className=" md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                    }}>
                        <div className="relative mb-16">
                            <div className=" z-10 ">
                                <p className=" font-playfair font-semibold text-5xl">03</p>
                                <p className=" font-playfair font-semibold text-3xl">Data Analysis</p>
                            </div>
                        <div className="w-1/2 md:w-3/4 h-24 bg-blue absolute right-0 top-0 z-[-1]" />
                        <p className="mt-5">Proficient at using data analysis tools such as MS-EXCEL, R-Studio and MS-Power BI. Able to present data in a visually pleasing, easily coprehensible manner.</p>
                        </div>
                    </motion.div>


                </div>
        </section>
    )

};

export default MySkills;
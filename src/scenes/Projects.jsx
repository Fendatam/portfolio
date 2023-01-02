import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
            {subtitle}
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} className=" lg:max-w-[600px] max-w-[350px] lg:max-h-[600px] max-h-[300px]"/>
    </motion.div>
  );
};

const Projects = () => {
    return (
        <section id="projects" className="lg:py-48 py-24 slo4">
            {/* hing */}
                <motion.div
                    className="w-2/5 mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                    }}>
                    <p className=" font-playfair font-semibold lg:text-5xl text-3xl">
                      <span className="text-blue">PRO</span>JECTS
                </p>
                <div className=" flex justify-center lg:mt-5 mt-2">
                    <LineGradient width="w-1/3" />
                </div>
            </motion.div>
            <div className="flex justify-center lg:mt-16 mt-8">
             <motion.div
                    className="sm:grid sm:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                   variants={container}>
                <div
            className="flex justify-center text-center items-center lg:p-10 p-5 bg-blue
            lg:max-w-[600px] max-w-[350px] lg:max-h-[600px] max-h-[300px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
                    <a href="https://arab-builders.vercel.app" target="_blank" rel="noreferrer"><Project title="Project 1" subtitle="A website I designed for a construction company. I used React.js, Framer motion, react slick slider, tailwindcss and email.js"/></a>
                     {/* ROW 2 */}
                    <Project title="Project 2" subtitle="Simple Responsive Website using HTML, CSS and BootStrap"/>
                    <a href="https://netflix-clone907.vercel.app/" target="_blank" rel="noreferrer"><Project title="Project 3" subtitle="Netflix Landing page clone + Sign-in page using React.js and tailwind"/></a>
                    </motion.div>
                    </div>
        </section>
    )
};

export default Projects;
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
      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} className=" md:max-w-[600px] max-h-[600px] max-w-[400px]"/>
    </motion.div>
  );
};

const Projects = () => {
    return (
        <section id="projects" className=" py-48 ">
            {/* hing */}
                <motion.div
                    className=" md:w-2/5 mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                    }}>
                    <p className=" font-playfair font-semibold text-5xl">
                      <span className="text-blue">PRO</span>JECTS
                </p>
                <div className=" flex justify-center mt-5">
                    <LineGradient width="w-1/3" />
                </div>
            </motion.div>
            <div className="flex justify-center mt-16">
             <motion.div
                    className="sm:grid sm:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                   variants={container}>
                <div
            className="flex justify-center text-center items-center p-10 bg-blue
              md:max-w-[600px] max-w-[400px] max-h-[600px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
                    <Project title="Project 1" subtitle="Lana Del Rey Fan Page landing page. Used a couple of toggle animations, text animations and intersection observer animation. HTML, CSS, vanilla JS and BootStrap"/>
                     {/* ROW 2 */}
                    <Project title="Project 2" subtitle="Simple Responsive Website using HTML, CSS and BootStrap"/>
                    <div
            className="flex justify-center text-center items-center p-10 bg-blue
              md:max-w-[600px] max-w-[400px] max-h-[600px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
                    </motion.div>
                    </div>
        </section>
    )
};

export default Projects;
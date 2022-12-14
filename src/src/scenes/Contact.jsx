import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
// import { useNavigate} from 'react-router-dom';


const Contact = () => {
  // const navigate = useNavigate();
  
  // const navigatetothanks = () => { 
  //   navigate('/Thanks');
  // }

    const form = useRef();

    const {
        register,
        formState: { errors },
  } = useForm();
  
  // let User = {
  //   name: "",
  //   email: "",
  //   message: ""  
  // }
  // console.log(watch(User));
  const [isButton, setIsButton] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1mxnmb9', 'template_17og4g4', form.current, '1JjDZSGymeAgl-ixP')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
    

    return (
        <section id="contact" className="lgg:py-48 py-24 slo">
            {/* Hings */}
            <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
                }}
                className="flex justify-end w-full"
                 >
                <div>
                <p className="font-playfair font-semibold lgg:text-4xl text-2xl">
                    <span className="text-yellow">CONTACT ME</span> TO GET STARTED
                </p>
                <div className="flex md:justify-end lgg:my-5 my-2">
                    <LineGradient width="w-1/2" />
                </div>
                </div>
            </motion.div>
            {/* Form */}
            <div className="md:flex md:justify-between gap-16 mt-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="lgg:basis-1/2 flex justify-center lgg:h-[50%] h-[30%] hover:filter hover:saturate-200 transition duration-500 "
        >
          <img src="../assets/contact.png" alt="contact" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="lgg:basis-1/2 md:w-[50%] mt-10 md:mt-0"
          >
           
          <form
            target="_blank"
            onSubmit={onSubmit}
              method="POST"
              ref={form}
            >
             
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

              
              <button
              className="lgg:p-5 p-3 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-blue hover:text-white transition duration-500"
                type="submit"
                onClick={() => setIsButton(!isButton)}
              >
              Send Message
            </button>
          
              </form>
          </motion.div>
        </div>
        
        </section>
    )
};

export default Contact;
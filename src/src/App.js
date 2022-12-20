/* eslint-disable no-unused-vars */
import Navbar from "./scenes/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";



function App() {

  const [selectedPage, setSelectedPage] = useState("home");
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  // const express = require("express");
  // const port = process.env.PORT || 3000; // this is the port number

  // const app = express(); // this is our app or instance of express

  // // API Middleware

  // app.use(express.json());   // this to akkpt info in json 

  // app.use(express.urlencoded()); // this to basiklly decode the data sent in html



  
  
  
  // //API Routes

  // app.get('/form', (req, res) => {
    
  //   res.sendFile(__dirname + '/public/index.html');

  // })

  // app.post('/formPost', (req, res) => { 
  //   console.log(req.body); //info wy gt is in thi body of request
  // })

  
  
  // // This is to listin to port
  
  // app.listen(port, () => {
  //   console.log(`Server started at ${port}`);
  // });


    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className=" w-5/6 mx-auto md:h-full ">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} />
        )}
        <Landing setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto md:h-full">
          <MySkills/>
      </div>
      <LineGradient/>
      <div className=" w-5/6 mx-auto">
          <Projects/>
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto">
          <Contact/>
      </div>
      <div>
      <Footer/>
      </div>
      </div>
  );
}

export default App;
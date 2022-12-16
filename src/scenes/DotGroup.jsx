import AnchorLink from "react-anchor-link-smooth-scroll"
import { useEffect } from "react"



const DotGroup = ({ selectedPage, setSelectedPage }) => {
      
    useEffect(() => {
        const selectedStyles = "relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%] bg-yellow"
        const arr = selectedStyles.split(" ");
        // home
         const albums2 = document.querySelector(".slo2");
        const hois2 = document.querySelector(".hoi2");
        const options2 = {
            threshold: 0.8
        }
        const observer2 = new IntersectionObserver(entries => {
            
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    hois2.classList.remove('bg-dark-grey')
                    hois2.classList.add(...arr);
                } else {
                    hois2.classList.remove(...arr);
                    hois2.classList.add('bg-dark-grey')
                }
            })
        }, options2);
        observer2.observe(albums2);
        // Skills
        const albums3 = document.querySelector(".slo3");
        const hois3 = document.querySelector(".hoi3");
        const options3 = {
            threshold: 0.8
        }
        const observer3 = new IntersectionObserver(entries => {
            
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    hois3.classList.remove('bg-dark-grey')
                    hois3.classList.add(...arr);
                } else {
                    hois3.classList.remove(...arr);
                    hois3.classList.add('bg-dark-grey')
                }
            })
        }, options3);
        observer3.observe(albums3);
        // project
        const albums4 = document.querySelector(".slo4");
        const hois4 = document.querySelector(".hoi4");
        const options4 = {
            threshold: 0.6
        }
        const observer4 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    hois4.classList.remove('bg-dark-grey')
                    hois4.classList.add(...arr);
                } else {
                    hois4.classList.remove(...arr);
                    hois4.classList.add('bg-dark-grey')
                }
            })
        }, options4);
        observer4.observe(albums4);

        // Contacts
        const albums = document.querySelector(".slo");
        const hois = document.querySelector(".hoi");
        const options = {
            threshold: 0.8
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    hois.classList.remove('bg-dark-grey')
                    hois.classList.add(...arr);
                } else {
                    hois.classList.remove(...arr);
                    hois.classList.add('bg-dark-grey')
                }
            })
        }, options);
    
        
            observer.observe(albums);
    }, []);
    

    
    const selectedStyles = ` relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
    
    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
            className={`${
                selectedPage === 'home' ? selectedStyles : " bg-dark-grey"
            } w-3 h-3 rounded-full hoi2`}
            href="#home"
                onClick={() => setSelectedPage('home')}
             />
             <AnchorLink
            className={`${
                selectedPage === 'skills' ? selectedStyles : " bg-dark-grey"
            } w-3 h-3 rounded-full hoi3`}
            href="#skills"
            onClick={() => setSelectedPage('skills')} />
             <AnchorLink
            className={`${
            selectedPage === 'projects' ? selectedStyles : " bg-dark-grey"
        } w-3 h-3 rounded-full hoi4`}
            href="#projects"
            onClick={() => setSelectedPage('projects')} />
            
             <AnchorLink
            className={`${
            selectedPage === 'contact' ? selectedStyles : " bg-dark-grey"
            } w-3 h-3 rounded-full hoi`}
            href="#contact"
                onClick={() => setSelectedPage('contact')} />
        </div>
    )


}

export default DotGroup;

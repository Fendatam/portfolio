
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/mohammed-jelal"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src="../assets/linkedin.png"/>
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/Fendatam/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="github-link" src="../assets/github1.png" className="w-10 h-10 top-[-5px] relative"/>
            </a>
        </div>
    )
}

export default SocialMediaIcons;
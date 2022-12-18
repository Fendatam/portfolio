import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="lgg:h-60 h-48 bg-blue lgg:pt-10 pt-5 slo">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons/>
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="font-playfair font-semibold lgg:text-2xl text-xl text-yellow">MOHAMMED JALAL</p>
                    <p className=" font-playfair lgg:text-md text-sm text-yellow">©2022 JALAL. All Rights Reserved.</p>
            </div>

            </div>
        </footer>
    )
};

export default Footer; 
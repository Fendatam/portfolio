import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="h-60 bg-blue pt-10 slo">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons/>
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="font-playfair font-semibold text-2xl text-yellow">MOHAMMED JALAL</p>
                    <p className=" font-playfair text-md text-yellow">©2022 JALAL. All Rights Reserved.</p>
            </div>

            </div>
        </footer>
    )
};

export default Footer; 
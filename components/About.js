import useWindowDimensions from "../hooks/useWindowDimensions";
import Image from "next/image";
import myImage from "../public/images/tevin2.webp"

function About() {
    const [windowDimensions] =useWindowDimensions()

    const renderAboutPhoto = () => {
        if (windowDimensions){
            const {width} = windowDimensions
            if (width< 768){
                return(
                    <div className="about-photo-container">
                        <div className="about-photo" data-aos="fade-up">
                            <Image src={myImage} alt={myImage} layout="fill" placeholder="blur"  />
                        </div>
                    </div>
                )
            } else return null
        }else return null
    }

    return (
        <div id="about">
            <h1 className="heading" data-aos="fade-up">About</h1>
            {renderAboutPhoto()}
            <p className="paragraph" data-aos="fade-up">
                Hello! My name is Tevin Aggrey. I&apos;m a frontend JavaScript software developer well conversant with React. My superpower is designing beautiful looking websites which have seamless user experience,
                efficient performance, good SEO and easy scalability.
            </p>
            <p className="paragraph" data-aos="fade-up">
                I would describe myself as a hybrid taught developer as I graduated with a Bachelor of Science degree in
                Computer
                Science from University of Nairobi in 2020 where
                I learnt the core fundamentals of what it entails
                to be a
                software developer. Over and above this, I have also done a fair share of self learning where I fell in
                love
                with JavaScript and decided to specialize my tech stack on. I also have keen eye for UI and UX design.
                Last but not least, I have also intermediate skills
                with Web3 which i&apos;m so passionate about.
            </p>
            <p className="paragraph" data-aos="fade-up">
                I&apos;m currently based in Nairobi Kenya, creating digital solutions to make the world a better place. I
                also
                enjoy networking with fellow creatives across the globe to broaden my thinking spectrum and get the ever
                illusive third eye perspective.
            </p>
            <p className="paragraph" data-aos="fade-up">
                As a self driven individual, an excellent team player with the ability to follow established procedures
                and work under little or no supervision, I&apos;m currently open to opportunities in fast-paced tech
                environments globally to utilize and enhance my well honed skills.
            </p>
            <div className="d-flex justify-content-center">
                <a href="/Tevin Aggrey CV.pdf" className="btn btn-primary mt-4" data-aos="fade-up">Download CV</a>
            </div>
        </div>
    )
}

export default About
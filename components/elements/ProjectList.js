import ProjectItem from "./ProjectItem";
import commerce from "../../public/images/projects/commerce.png";
import Abuflan from "../../public/images/projects/Abuflan.PNG"
import {
    faHtml5,
    faCss3,
    faJs,
    faSass,
    faBootstrap,
    faNode,
    faReact, faWordpress
} from "@fortawesome/free-brands-svg-icons";

function ProjectList() {
    return (
        <>
            <ProjectItem
                title="E-Commerce website"
                description={
                    <>
                        <p>
                            This is a fully functional e-commerce website which is fast, has good SEO and is fully responsive across all screens. It uses google maps api to
                            calculate delivery fee and give accurate directions for efficient deliveries. The payment system is powered by daraja api which enables m-pesa, Kenya&apos;s most popular payment system. Lastly, its integrated with google analytics and facebook pixel to boost sales.
                        </p>
                        <p>
                            Together with my friend we were able to build a real time website, <a href="http://139.162.233.144/" target="_blank" rel="noreferrer">Amazon Cellular </a> which
                            sells electronics. Our client was pleased with the website and has reported a smooth
                            operation of their online business.
                        </p>
                    </>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faNode, "mongodb.svg"]}
                demo="http://139.162.233.144/"
                youtube={true}
                link="https://www.youtube.com/embed/uCpxKfBrX7k"
            />

            <ProjectItem
                title= "Wordpress e-commerce site"
                description={
                    <p>
                        Another fully functional website built with Wordpress which has good SEO with help of plugins. Which is responsive across all screens.
                        <a href="https://abufulan.co.ke/" target="_blank" rel="noreferrer"> Abufulan</a> is also sells electronics and the client was pleased with the site.

                    </p>
                }
                demo= "https://abufulan.co.ke/"
                src={Abuflan}
                techUsed={[faWordpress]}
            />

        </>
    )
}

export default ProjectList
import ProjectItem from "./ProjectItem";
import commerce from "../../public/images/projects/commerce.png";
import Abuflan3 from "../../public/images/projects/Abuflan3.png";
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
                            Together with my friend we built a real time website, <a href="http://139.162.233.144/" target="_blank" rel="noreferrer">Amazon Cellular </a> which
                            sells electronics. Our client was pleased with the website and has reported a smooth
                            operation of their online business.
                        </p>
                    </>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faNode, "mongodb.svg"]}
                demo="https://www.amazon-cellular.co.ke/"
                src={commerce}


            />

            <ProjectItem
                title= "Wordpress e-commerce site"
                description={
                    <>
                        <p>
                            A fully functional e-commerce website built with Wordpress which has good SEO with help of plugins and fully responsive across all screens.    <a href="https://abufulan.co.ke/" target="_blank" rel="noreferrer">Abufulan</a> is sells electronics country-wide.
                        </p>
                        <p>
                            The client had no coding experience but needed a website that would easy to maintain and update. The best approach in this case was Wordpress site and which I used my skills to develop for him Abufulan. It was a good experience for me and I learnt a lot.
                        </p>

                    </>



                }
                techUsed={[faWordpress]}
                demo= "https://abufulan.co.ke/"
                src={Abuflan3}

            />

        </>
    )
}

export default ProjectList
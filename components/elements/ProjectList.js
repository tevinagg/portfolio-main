import ProjectItem from "./ProjectItem";
import commerce from "../../public/images/projects/commerce.png";
import {
    faHtml5,
    faCss3,
    faJs,
    faSass,
    faBootstrap,
    faNode,
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
                             <a href="https://www.amazon-cellular.co.ke/" target="_blank" rel="noreferrer">Amazon Cellular </a> is a real time website which sells electronics. Our client was pleased with the website and has reported a smooth
                            operation of their online business.
                        </p>
                    </>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faNode, "mongodb.svg"]}
                demo="https://www.amazon-cellular.co.ke/"
                src={commerce}
            />
        </>
    )
}

export default ProjectList
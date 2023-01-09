import ProjectItem from "./ProjectItem";
import commerce from "../../public/images/projects/commerce.png";
import atm from "../../public/images/projects/Interactive-card.png"
import {
    faHtml5,
    faCss3,
    faJs,
    faSass,
    faBootstrap,
    faNode,
    faReact,
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
                sourceCode="https://github.com/tevinagg/amazon-cellular"
            />
            <ProjectItem
                title="Interactive Atm Card"
                description={
                    <>
                        <p>
                            This is an ATM Debit card simulation process for filling details used for processing Atm cards. The application uses state management hook for updating the card while the user is filling his/her details.
                        </p>
                        <p>
                            Application was a good opportunity to implement latest features like React router V6 which was used to navigate pages and redux toolkit which simplifies most redux tasks, prevents common mistakes and makes it easier to write redux applications.
                        </p>
                    </>
                }
                techUsed={[faHtml5, faCss3, faJs, faReact, "mongodb.svg" ]}
                demo="https://atm.taggrey.com/"
                src={atm}
                sourceCode="https://github.com/tevinagg/Interactive_Atm_Card"

            />
        </>
    )
}

export default ProjectList
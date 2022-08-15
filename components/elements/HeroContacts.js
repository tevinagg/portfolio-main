import {useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function HeroContacts() {

    const callRef = useRef();
    const mailRef = useRef();
    const whatsappRef = useRef();
    const twitterRef = useRef();
    const linkedInRef = useRef();
    // const githubRef = useRef();

    const setToolTip = (ref, title) => {
        let toolTip = new window.bootstrap.Tooltip(ref.current, {
            title: title,
            placement: 'top',
            trigger: 'hover'
        })
    }

    useEffect(() => {
        window.bootstrap = require('bootstrap');
        setToolTip(callRef, "Call")
        setToolTip(mailRef, "Email")
        setToolTip(whatsappRef, "Whatsapp")
        setToolTip(twitterRef, "Twitter")
        setToolTip(linkedInRef, "LinkedIn")
        // setToolTip(githubRef, "github")
    })

    return (
        <div id="contact">
            <a href="tel:+254718198492" alt="Phone Number">
                <button ref={callRef} className="icons" aria-label="phone">
                    <FontAwesomeIcon icon={faMobileScreenButton} className="default"/>
                </button>
            </a>
            <a href="mailto:taggrey26@gmail.com" alt="email">
                <button ref={mailRef} className="icons" aria-label="email">
                    <FontAwesomeIcon icon={faEnvelope} className="default"/>
                </button>
            </a>
            {/*<a href="https://github.com/tevinagg" target="_blank" rel="noreferrer">*/}
            {/*    <button ref={githubRef} className="icons">*/}
            {/*        <FontAwesomeIcon icon={faGithub} className="default"/>*/}
            {/*    </button>*/}
            {/*</a>*/}
            <a href="https://wa.me/254718198492" target="_blank" rel="noreferrer" alt="whatsapp">
                <button ref={whatsappRef} className="icons" aria-label="whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} className="whatsapp"/>
                </button>
            </a>
            <a href="https://twitter.com/TevinAggrey26" target="_blank" rel="noreferrer" alt="twitter">
                <button ref={twitterRef} className="icons" aria-label="twitter">
                    <FontAwesomeIcon icon={faTwitter} className="twitter"/>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/tevin-aggrey/" target="_blank" rel="noreferrer" alt="linkedin">
                <button ref={linkedInRef} className="icons" aria-label="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} className="linked"/>
                </button>
            </a>
        </div>
    )
}

export default HeroContacts
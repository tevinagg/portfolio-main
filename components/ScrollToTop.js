import {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

function ScrollToTop() {
    const [scrollButton, setscrollButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setscrollButton(true);
            } else {
                setscrollButton(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const renderScrollToTop = () => {
        if (scrollButton){
            return(
                <div className="scroll-to-top">
                    <FontAwesomeIcon icon={faArrowUp} onClick={goToTop} className="icon-position icon-style" />
                </div>
            )
        } else return null
    }

    return (
        <>
            {renderScrollToTop()}
        </>
    );
}

export default ScrollToTop
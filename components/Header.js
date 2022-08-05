import {useEffect, useState, useRef} from "react";
import Link from "next/link"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import {faSun} from "@fortawesome/free-solid-svg-icons";

function Header() {

    const [stateTheme, setStateTheme] = useState("")

    const [scrolled, setScrolled] = useState(false)

    const dropdownButton = useRef()

    const navLinksContainer = useRef()


    useEffect(() => {
        getDefaultTheme()

        window.addEventListener("scroll", event => {
            if (window.scrollY > 300) {
                setScrolled(true)
            } else{
                setScrolled(false)
            }
        })
    }, [])

    const getDefaultTheme = () => {
        // localStorage.getItem("theme") ? theme = localStorage.getItem("theme") : theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        loadTheme(theme)
    }

    const changeTheme = () => {
        let theme = stateTheme;
        let audio;
        if(theme === 'dark'){
            audio = document.querySelector('.audio-light-on');
            theme = 'light';
        } else {
            audio = document.querySelector('.audio-light-off');
            theme = 'dark';
        }
        audio.currentTime = 0;
        audio.play();
        loadTheme(theme);
    }

    const loadTheme = (theme) => {
        const root = document.querySelector(':root');
        root.setAttribute('color-scheme', `${theme}`);
        // localStorage.setItem("theme", `${theme}`)
        setStateTheme(theme)
    }

    const navbarColor = () => {
        if (stateTheme === "light" && !scrolled){
            return "navbar-light navbar-not-scrolled"
        } else if (stateTheme === "light" && scrolled){
            return "navbar-light navbar-scrolled"
        } else if (stateTheme === "dark" && !scrolled){
            return "navbar-dark navbar-not-scrolled"
        } else if (stateTheme === "dark" && scrolled){
            return "navbar-dark navbar-scrolled"
        }
    }

    const collapseNav = () => {
        dropdownButton.current.classList.add("collapsed");
        navLinksContainer.current.classList.remove("show");
    }


    return (
        <nav className={`navbar navbar-expand-lg sticky-top ${navbarColor()}`} id="navbar">
            <div className="container-fluid flex-lg-row-reverse">
                <button ref={dropdownButton} className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <button className="btn nav-item" id="theme-btn" onClick={changeTheme}>
                    <FontAwesomeIcon icon={stateTheme === "light" ? faMoon : faSun }/>
                </button>
                <div ref={navLinksContainer} className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="#">
                                <a onClick={collapseNav} className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#about">
                                <a onClick={collapseNav} className="nav-link">About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#skills">
                                <a onClick={collapseNav} className="nav-link">Skills</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#projects">
                                <a onClick={collapseNav} className="nav-link">Projects</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#contact-form">
                                <a onClick={collapseNav} className="nav-link">Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <audio src="/audio/light-on.mp3" className="audio-light-on"
                   data-attribute="adapted from user 160033 file on freesound.org https://freesound.org/people/160033/sounds/366184/ under CC BY-NC 3.0"></audio>
            <audio src="/audio/light-off.mp3" className="audio-light-off"
                   data-attribute="adapted from user 160033 file on freesound.org https://freesound.org/people/160033/sounds/366184/ under CC BY-NC 3.0"></audio>
        </nav>
    )
}

export default Header
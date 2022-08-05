import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";


function HomePage() {
    return (
        <>
            <ScrollToTop />
            <Hero/>
            <div className="container">
                <About/>
                <Skills/>
                <Projects/>
                <Contact />

            </div>

        </>
    )
}

export default HomePage
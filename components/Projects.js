import {useState} from "react";
import ProjectList from "./elements/ProjectList";
import SmallProjectsList from "./elements/SmallProjectsList";

function Projects() {

    const [more, setMore] = useState(false)

    return(
        <div id="projects">
            <h1 className="heading" data-aos="fade-up">Projects</h1>
            <ProjectList />
            {/*<div className={more ? "d-none" : "d-block"}>*/}
            {/*    <div className="d-flex justify-content-center mb-5">*/}
            {/*        <button onClick={() => setMore(!more)} className="btn btn-primary">Show more projects</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<SmallProjectsList more={more} setMore={setMore}/>*/}
        </div>
    )
}

export default Projects
import SmallProjectItem from "./SmallProjectItem";
import {
    faCss3,
    faHtml5,
    faJs,
    faReact
} from "@fortawesome/free-brands-svg-icons";

function SmallProjectsList({more, setMore}) {
    return(
        <div className={more ? "d-block" : "d-none"}>
            <div className="row">
                <SmallProjectItem title="YouTube clone" sourceCode="https://github.com/tevinagg/Youtube-clone" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="Unsplash clone" sourceCode="https://github.com/tevinagg/unsplash-clone" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="Todo List" sourceCode="https://github.com/tevinagg/Todo_List" techUsed={[faHtml5, faCss3, faJs, faReact]} />
            </div>
            <div className="d-flex justify-content-center mb-5">
                <button onClick={() => setMore(!more)} className="btn btn-primary">Show {more ? "less" : "more"} projects</button>
            </div>
        </div>
    )
}

export default SmallProjectsList
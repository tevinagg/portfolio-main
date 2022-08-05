import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

function SmallProjectItem({title, sourceCode, techUsed}) {

    const renderTechUsed = () => {
        let i = 0
        return techUsed.map(
            tech => {
                i++
                return <FontAwesomeIcon icon={tech} className="mx-2 small-tech" key={i} />
            }
        )
    }

    const renderLink = () => {
        if (title.toLowerCase().includes("wordpress")) {
            return (
                <a href={sourceCode} target="_blank" rel="noreferrer">
                    <button className="btn btn-outline-primary mx-2">View Project &nbsp; <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}/></button>
                </a>
            )
        }

        return(
            <a href={sourceCode} target="_blank" rel="noreferrer">
                <button className="btn btn-outline-primary mx-2">View Code &nbsp; <FontAwesomeIcon icon={faGithub} /> </button>
            </a>
        )
    }

    return(
        <div className="col-lg-4 col-md-6 my-3">
            <div className="card small-project-item">
                <div className="card-body">
                    <h5 className="card-title mb-4">{title}</h5>
                    <p>{renderTechUsed()}</p>
                    {renderLink()}
                </div>
            </div>
        </div>
    )
}

export default SmallProjectItem
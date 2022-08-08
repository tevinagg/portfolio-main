import {useState, useEffect} from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function ProjectItem({title, description, techUsed, demo, sourceCode, youtube, link, src}) {

    const [windowDimensions, setWindowDimensions] = useWindowDimensions();

    const renderTechUsed = () => {
        let i = 0
        return techUsed.map(
            tech => {
                i++
                if (typeof tech === "string") {
                    if (tech.includes(".svg")) return <img src={`/images/icons/${tech}`} alt={tech} className="svg mx-2 big-tech" key={i}/>

                    if (tech.includes("https://")) return <img src={tech} alt={tech} className="svg mx-2 big-tech" key={i} />
                }

                return <FontAwesomeIcon icon={tech} className="mx-2 big-tech" key={i} />
            }
        )
    }

    const renderPreview = () => {
        if (windowDimensions){
            const {width} = windowDimensions
            if (width > 992){
                if (youtube) {
                    return (
                        <iframe src={link} style={{height: "inherit", width: "inherit"}} title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    )
                } else {
                    return <Image src={src} alt={src} placeholder="blur" blurDataURL={src} layout="fill"/>
                }
            }

            return null
        }
        return null
    }

    const renderPreviewMD = () => {
        if (windowDimensions){
            const {width} = windowDimensions
            if (width < 992){
                if (youtube) {
                    return (
                        <iframe src={link} style={{height: "inherit", width: "inherit"}} title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    )
                } else {
                    return <Image src={src} alt={src} placeholder="blur"/>
                }
            }

            return null
        }
        return null
    }


    return (
        <div className="row project-item" data-aos="fade-up">
            <div className="col-lg-6 project-details">
                <h3 className="project-heading">{title}</h3>
                <div className="project-description">
                    {description}
                </div>
                <div className="project-preview-md">
                    <div className="project-preview-md-container">
                        {renderPreviewMD()}
                    </div>
                </div>
                <div className="tech-used">
                    {renderTechUsed()}
                </div>
                <div className="project-links">
                    <a href={demo} target="_blank" rel="noreferrer">
                        <button className="btn btn-outline-primary mx-2">Preview Site &nbsp; <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}/></button>
                    </a>
                    {/*<a href={sourceCode} target="_blank" rel="noreferrer">*/}
                    {/*    <button className="btn btn-outline-primary mx-2">View Code &nbsp; <FontAwesomeIcon icon={faGithub}/>*/}
                    {/*    </button>*/}
                    {/*</a>*/}
                </div>
            </div>
            <div className="col-1 project-details-extended"></div>
            <div className="project-preview">
                {renderPreview()}
            </div>
        </div>
    )
}

export default ProjectItem
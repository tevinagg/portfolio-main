import Image from "next/image";

function SkillsItem({src, name}) {
    return(
        <div className="col-2 skill-item">
            <Image src={src} alt="skill" placeholder="blur" blurDataURL={src} layout="fixed" width="48" height="48" />
            <div className=" skill-name">{name}</div>
        </div>
    )
}

export default SkillsItem
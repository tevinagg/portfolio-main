import SkillsList from "./elements/SkillsList";
import SkillsItem from "./elements/SkillsItem";

function Skills() {
    return (
        <div id="skills">
            <h1 className="heading" data-aos="fade-up">Skills</h1>
            <div>
                <h2 className="heading2" data-aos="fade-up">Languages</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/html.png" name="HTML" />
                    <SkillsItem src="/images/skills/css.png" name="CSS" />
                    <SkillsItem src="/images/skills/js.png" name="JavaScript" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2" data-aos="fade-up">Frameworks & Libraries</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/react.png" name="React JS" />
                    <SkillsItem src="/images/skills/next.png" name="Next JS" />
                    <SkillsItem src="/images/skills/node.png" name="Node JS" />
                    <SkillsItem src="/images/skills/bootstrap.png" name="Bootstrap" />
                    <SkillsItem src="/images/skills/sass.png" name="Sass" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2" data-aos="fade-up">Databases</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/mongodb.png" name="MongoDB" />
                    <SkillsItem src="/images/skills/mysql.png" name="MySQL" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2" data-aos="fade-up">Other Technologies</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/git.png" name="Git" />
                    <SkillsItem src="/images/skills/wordpress.png" name="Wordpress" />
                    <SkillsItem src="/images/skills/photoshop.png" name="Photoshop" />
                </SkillsList>
            </div>
        </div>
    )
}

export default Skills
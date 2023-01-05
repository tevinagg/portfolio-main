import SkillsList from "./elements/SkillsList";
import SkillsItem from "./elements/SkillsItem";

function Skills() {
    return (
        <div id="skills">
            <h1 className="heading" data-aos="fade-up">Skills</h1>
            <div>
                <h2 className="heading2" data-aos="fade-up">Languages</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/html.webp" name="HTML" />
                    <SkillsItem src="/images/skills/css.webp" name="CSS" />
                    <SkillsItem src="/images/skills/js.webp" name="JavaScript" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2" data-aos="fade-up">Frameworks & Libraries</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/react.webp" name="React JS" />
                    <SkillsItem src="/images/skills/next.webp" name="Next JS" />
                    <SkillsItem src="/images/skills/bootstrap.webp" name="Bootstrap" />
                    <SkillsItem src="/images/skills/sass.webp" name="Sass" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2" data-aos="fade-up">Databases</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/mysql.webp" name="MySQL" />
                    <SkillsItem src="/images/skills/mongodb.webp" name="MongoDB" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2" data-aos="fade-up">Other Technologies</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/git.webp" name="Git" />
                    <SkillsItem src="/images/skills/wordpress.webp" name="Wordpress" />
                    <SkillsItem src="/images/skills/linode.webp" name="Linode" />
                    <SkillsItem src="/images/skills/photoshop.webp" name="Photoshop" />
                </SkillsList>
            </div>
        </div>
    )
}

export default Skills
import skills from "../../assets/skills.svg";
import deleteSkill from "../../assets/deleteSkill.svg";


function Skills({
  addSkill
}) {
  return (
    <div className="skillsMain">
      <div className="skillsTitle">
        <img className="skillsIcon" src={skills} />
        <h2>Skills</h2>
      </div>

      <form>
        <div className="skills">
          <input
            type="text"
            // value=""
            placeholder="Language/Technology"
            maxLength="15"
            autoComplete="off"
          onChange={addSkill}
          />

          <button><img className="deleteSkillIcon" src={deleteSkill} /></button>
        </div>
        <button className="addNewWorkBtn">+ Add</button>
      </form>
    </div>
  );
}

export default Skills;

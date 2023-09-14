/* eslint-disable no-unused-vars */
import skills from "../../assets/skills.svg"; 
import deleteSkillimg from "../../assets/deleteSkill.svg";

function Skills({ addSkill, deleteSkill, skill, updateSkill }) {
  return (
    <div className="skillsMain">
      <div className="skillsTitle">
        <img className="skillsIcon" src={skills} />
        <h1>Work Skills</h1>
      </div>
      {skill.map((i) => {
        return (
          <div key={i.id}>
            <form onSubmit={(e) => updateSkill(e, i.id)}>
              <div className="skills">
                <input
                  placeholder="Language/Technology"
                  required
                  defaultValue={i.skillName}
                />

                <button onClick={(e) => deleteSkill(i.id)}>
                  <img className="deleteSkillIcon" src={deleteSkillimg} />
                </button>
              </div>

              <div className="skills">
                <input
                  placeholder="Language/Technology"
                  required
                  defaultValue={i.languageName}
                />
                <button>
                  <img className="deleteSkillIcon" src={deleteSkillimg} />
                </button>
              </div>
              <button className="addNewWorkBtn">+ Add</button>
            </form>
          </div>
        );
      })}
      <form onSubmit={addSkill}>
        <input placeholder="Language/Technology" required></input>
        <input placeholder="Language/Technology" required></input>

        <button className="addNewWorkBtn" type="submit">
          + Add
        </button>
      </form>
    </div>
  );
}

export default Skills;

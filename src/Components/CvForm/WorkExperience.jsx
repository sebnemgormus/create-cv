/* eslint-disable no-unused-vars */
import workExperienceImg from "../../assets/workExperience.svg";

function WorkExperience({
  onSubmit,
  workExperience,
  saveExperience,
  deleteExperience,
}) {
  return (
    <div className="workExperienceMain">
      <div className="workExperienceTitle">
        <img className="workIcon" src={workExperienceImg} />
        <h2>Work Experience</h2>
      </div>
      {workExperience.map((i) => {
        return (
          <div key={i.id}>
            <form onSubmit={(e) => saveExperience(e, i.id)}>
              <input
                placeholder="Position"
                required
                defaultValue={i.position}
              />
              <input placeholder="Company" required defaultValue={i.company} />

              <input placeholder="Start Date" type="date" required defaultValue={i.start} />
              <input placeholder="End Date" type="text" required defaultValue={i.end} />

              <textarea
                placeholder="Description"
                id="description"
                required
                defaultValue={i.desc}
              />
              <div className="experience-btn-container">
                <button type="submit" className="btn btn-save">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-delete"
                  onClick={(e) => deleteExperience(i.id)}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        );
      })}
      <form onSubmit={onSubmit}>
        <input placeholder="Position" required></input>
        <input placeholder="Company" required></input>
        <input placeholder="Start Date" type="date" required></input>
        <input placeholder="End Date" type="text" required></input>
        <textarea
          placeholder="Description"
          className="description"
          required
        ></textarea>
        <button className="addNewWorkBtn" type="submit">
          + Add
        </button>
      </form>
    </div>
  );
}

export default WorkExperience;

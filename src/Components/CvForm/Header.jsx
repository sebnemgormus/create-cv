import React from "react";
import github from "../../assets/github.svg"; 
import autofill from "../../assets/autofill.svg"; 
import save from "../../assets/save.svg"; 


function Header() {
  return (
    <header>
      <div className="header">
        <h1>Cv Maker</h1>
        <div className="headerBtnSection">
          <button>
            <img src={save} alt="" /><span>Save</span>
          </button>
          <button>
            <img src={autofill} alt="" /><span>Autofill</span>
          </button>
        </div>
      </div>
      <div className="createdBy">
        Created by <span>
                      <a href="https://github.com/sebnemgormus" target="_blank" rel="noreferrer">
                        <img src={github} alt=""/>sebnemgormus
                      </a>
                   </span>
      </div>
    </header>
  );
}

export default Header;

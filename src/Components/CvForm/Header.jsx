import github from "../../assets/github.svg"; 

function Header() {
  return (
    <header>
      <div className="header">
        <h1>Cv Generator</h1>
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

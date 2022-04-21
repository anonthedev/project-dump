import "./Project.css";
import "./LibraryProject.css";
import { useSelector } from "react-redux";
import { selectLibrary } from "../features/librarySlice";
import { selectUserName } from "../features/userSlice";
import { Link } from "react-router-dom";

function LibraryProject() {
  const username = useSelector(selectUserName);
  const library = useSelector(selectLibrary);

  function trimContent(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      {!username ? (
        <div className="pl-sign-in">Please Sign In</div>
      ) : (
        <article className="blog">
          {library &&
            library.map((project, key) => (
              <Link to={"/" + project.id}>
                <div className="blog-content" key={key}>
                    <div className="blog-txt">
                      <div className="blog-head">
                        <h3>{project.title}</h3>
                      </div>
                      <p>{trimContent(project.description, 500)}</p>
                    </div>
                    <div className="blog-img">
                      <img
                        src={
                          project.img
                            ? project.img
                            : "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
                        }
                        alt=""
                      />
                    </div>
                </div>
              </Link>
            ))}
          {console.log(library)}
        </article>
      )}
    </>
  );
}

export default LibraryProject;

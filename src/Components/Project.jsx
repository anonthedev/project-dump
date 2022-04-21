import "./Project.css";
import { useSelector } from "react-redux";
import { selectProject } from "../features/projectSlice";
import { Link } from "react-router-dom";

function Project(props) {
  const projects = useSelector(selectProject);

  function trimContent(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <article className="blog">
      {projects &&
        projects.map((project, key) => (
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
    </article>
  );
}

export default Project;

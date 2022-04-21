import "./NewProjectBtn.css";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/userSlice";

function NewProjectBtn() {
  const username = useSelector(selectUserName);

  return (
    <>
      {!username ? (
        <div></div>
      ) : (
        <Link className="new-blog-btn-link" to="/new">
          <div id="new-blog-btn" className="hidden visible">
            <i className="ri-add-line"></i>
            <Outlet />
          </div>
        </Link>
      )}
    </>
  );
}

export default NewProjectBtn;

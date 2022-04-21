import "./NewProject.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserEmail } from "../features/userSlice";

function NewProject() {
  const userEmail = useSelector(selectUserEmail)
  const [projectTitle, setprojectTitle] = useState("");
  const [projectContent, setprojectContent] = useState("");
  const navigate = useNavigate()

  function handleProjectTitle({ target }) {
    setprojectTitle(target.value);
  }

  function handleProjectContent({ target }) {
    setprojectContent(target.value);
  }

  async function publishProject() {
    const docRef = await addDoc(collection(db, "projects"), {
      title: `${projectTitle}`,
      description: `${projectContent}`,
      email: `${userEmail}`,
    });
    navigate("/", {replace: true})
  }

  return (
    <section className="new-blog">
      <div className="new-blog-title">
        <span>Project Title : </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter the title"
          onChange={handleProjectTitle}
        />
      </div>

      <div className="new-blog-content">
        <span>Project Description : </span>
        <textarea
          placeholder="Pen down your thoughts here..."
          onChange={handleProjectContent}
        ></textarea>
      </div>

      <div>
        <button onClick={publishProject}>Publish</button>
      </div>
    </section>
  );
}

export default NewProject;

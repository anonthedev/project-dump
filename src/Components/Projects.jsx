import "./Projects.css";
import Project from "./Project";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import db from "../firebase";
import { getDocs, collection } from "../firebase";
import { setProjects } from "../features/projectSlice";
import NewBlogBtn from "./NewProjectBtn";

function Projects() {
  const dispatch = useDispatch();
  let projects = [];

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    querySnapshot.forEach((doc) => {
      projects = [...projects, { id: doc.id, ...doc.data() }];
    });
    dispatch(
      setProjects({
        projects: projects,
      })
    );
  }, []);

  return (
    <section>
      <Project />
      <NewBlogBtn/>
    </section>
  );
}

export default Projects;

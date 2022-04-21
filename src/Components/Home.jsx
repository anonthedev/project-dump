import Projects from "./Projects";
import "./Home.css"

function Home() {
  return (
    <main>
      <div className="ideas-title">
        <h2 className="gradient">
          Ideas
        </h2>
      </div>
      <Projects/>
    </main>
  );
}

export default Home;
